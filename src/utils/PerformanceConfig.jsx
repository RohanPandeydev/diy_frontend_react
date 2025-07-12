import React, { useState, useCallback, useRef, useEffect } from 'react';

// Optimized Image Component with WebP support, lazy loading, and responsive sizing
const OptimizedImage = React.memo(({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  priority = false,
  sizes = '100vw',
  quality = 85,
  placeholder = 'blur',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(priority);

  // Generate WebP and fallback sources
  const generateSources = useCallback((baseSrc) => {
    const ext = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${ext}`, '');
    
    return {
      webp: `${baseName}.webp`,
      original: baseSrc,
      fallback: baseSrc.replace(`.${ext}`, '.jpg')
    };
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Handle image load
  const handleLoad = useCallback((event) => {
    setIsLoaded(true);
    onLoad?.(event);
  }, [onLoad]);

  // Handle image error
  const handleError = useCallback((event) => {
    setIsError(true);
    onError?.(event);
  }, [onError]);

  // Generate responsive image sources
  const sources = generateSources(src);

  // Calculate optimal dimensions
  const aspectRatio = width && height ? width / height : null;
  const optimizedStyle = {
    ...style,
    aspectRatio: aspectRatio || 'auto',
    objectFit: 'cover',
    transition: 'opacity 0.3s ease',
    opacity: isLoaded ? 1 : 0
  };

  if (!isVisible) {
    return (
      <div 
        ref={imgRef}
        className={`image-placeholder ${className}`}
        style={{
          ...optimizedStyle,
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: height || '200px',
          width: width || '100%'
        }}
        role="img"
        aria-label={`Loading ${alt}`}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>Loading...</span>
      </div>
    );
  }

  return (
    <picture className={className}>
      {/* WebP source for modern browsers */}
      <source
        srcSet={`${sources.webp} 1x, ${sources.webp.replace('.webp', '@2x.webp')} 2x`}
        type="image/webp"
        sizes={sizes}
      />
      
      {/* Fallback source */}
      <source
        srcSet={`${sources.fallback} 1x, ${sources.fallback.replace('.jpg', '@2x.jpg')} 2x`}
        type="image/jpeg"
        sizes={sizes}
      />
      
      {/* Main image element */}
      <img
        ref={imgRef}
        src={sources.original}
        alt={alt}
        width={width}
        height={height}
        style={optimizedStyle}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        fetchPriority={priority ? 'high' : 'auto'}
        {...props}
      />
    </picture>
  );
});

// Component to replace your current image implementations
const ImageOptimizationWrapper = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Example optimized images for your dashboard */}
      
      {/* Take Action Image - Optimized */}
      <OptimizedImage
        src="/images/take-action.webp"
        alt="Take Action"
        width={412}
        height={275}
        priority={true}
        sizes="(max-width: 768px) 100vw, 412px"
        className="take-action-image"
      />
      
      {/* We Are Back Image - Optimized */}
      <OptimizedImage
        src="/images/we-are-back.jpeg"
        alt="We Are Back"
        width={388}
        height={388}
        sizes="(max-width: 768px) 100vw, 388px"
        className="we-are-back-image"
      />
      
      {/* Factory Image - Optimized */}
      <OptimizedImage
        src="/images/robotic-arms-along-assembly-line-in-modern-factory.jpg"
        alt="Modern Factory with Robotic Arms"
        width={575}
        height={300}
        sizes="(max-width: 768px) 100vw, 575px"
        className="factory-image"
      />
    </div>
  );
};

// CSS-in-JS for critical image styles
const InjectImageOptimizationCSS = () => {
  useEffect(() => {
    const styleId = 'image-optimization-css';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      /* Image optimization CSS */
      .optimized-image {
        content-visibility: auto;
        contain: layout style paint;
        will-change: transform;
      }
      
      .optimized-image img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
      }
      
      .image-placeholder {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
        contain: layout style paint;
      }
      
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      
      /* Responsive image utilities */
      .responsive-image {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
      
      /* Performance optimizations */
      picture {
        display: block;
        contain: layout style paint;
      }
      
      /* Reduce layout shift */
      .aspect-ratio-container {
        position: relative;
        overflow: hidden;
      }
      
      .aspect-ratio-container::before {
        content: '';
        display: block;
        padding-top: var(--aspect-ratio, 56.25%);
      }
      
      .aspect-ratio-container > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      /* Critical image optimizations */
      .critical-image {
        content-visibility: auto;
        contain: layout style paint;
        will-change: transform;
      }
      
      /* Optimize for mobile */
      @media (max-width: 768px) {
        .mobile-optimized-image {
          contain: layout style paint;
          content-visibility: auto;
        }
      }
      
      /* Reduce paint operations */
      .paint-optimized-image {
        contain: layout style paint;
        will-change: auto;
      }
    `;
    document.head.appendChild(style);
  }, []);
};

// Enhanced image optimization utility
const optimizeImageSrc = (src, options = {}) => {
  const {
    width,
    height,
    quality = 85,
    format = 'webp',
    responsive = true
  } = options;

  // Generate optimized image URLs
  const baseName = src.split('.').slice(0, -1).join('.');
  const extension = src.split('.').pop();
  
  const optimizedSrc = {
    webp: `${baseName}.webp`,
    original: src,
    fallback: `${baseName}.jpg`
  };

  // Add responsive sizes if needed
  if (responsive && width) {
    const sizes = [
      { width: Math.round(width * 0.5), suffix: '@0.5x' },
      { width: Math.round(width * 0.75), suffix: '@0.75x' },
      { width: width, suffix: '' },
      { width: Math.round(width * 1.5), suffix: '@1.5x' },
      { width: Math.round(width * 2), suffix: '@2x' }
    ];

    optimizedSrc.responsive = sizes.map(size => ({
      ...size,
      webp: `${baseName}${size.suffix}.webp`,
      jpg: `${baseName}${size.suffix}.jpg`
    }));
  }

  return optimizedSrc;
};

// Enhanced image preloader with connection awareness
const useImagePreloader = (images = [], priority = 'low') => {
  useEffect(() => {
    const preloadImages = () => {
      images.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src;
        link.fetchPriority = img.priority || priority;
        if (img.sizes) link.sizes = img.sizes;
        if (img.type) link.type = img.type;
        document.head.appendChild(link);
      });
    };

    // Connection-aware preloading
    if ('connection' in navigator) {
      const connection = navigator.connection;
      const effectiveType = connection.effectiveType;
      const saveData = connection.saveData;

      if (effectiveType === '4g' && !saveData) {
        preloadImages();
      } else if (effectiveType === '3g' && !saveData) {
        setTimeout(preloadImages, 100);
      } else if (effectiveType === '2g' || saveData) {
        // Minimal preloading for slow connections
        setTimeout(() => {
          images.slice(0, 2).forEach(img => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = img.src;
            document.head.appendChild(link);
          });
        }, 500);
      }
    } else {
      preloadImages();
    }
  }, [images, priority]);
};

// Performance monitoring component
const ImagePerformanceMonitor = () => {
  useEffect(() => {
    const monitorImageLoading = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP Image:', entry.element?.src, entry.startTime);
            }
          });
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        return () => observer.disconnect();
      }
    };

    return monitorImageLoading();
  }, []);

  return null;
};

// Maximum performance hook
const useMaximumPerformance = () => {
  useEffect(() => {
    // Inject critical CSS
    InjectImageOptimizationCSS();
    
    // Preload critical images
    const criticalImages = [
      { src: '/images/performance-banner.webp', priority: 'high' },
      { src: '/images/take-action.webp', priority: 'high' },
      { src: '/images/we-are-back.webp', priority: 'medium' }
    ];
    
    useImagePreloader(criticalImages, 'high');
    
    // Add resource hints
    const resourceHints = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' }
    ];

    resourceHints.forEach(hint => {
      const link = document.createElement('link');
      Object.assign(link, hint);
      if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
      document.head.appendChild(link);
    });

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered:', registration);
        })
        .catch(error => {
          console.log('SW registration failed:', error);
        });
    }
  }, []);
};

// Performance monitoring component
const PerformanceMonitor = () => {
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // Monitor LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor CLS
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null;
};

export {
  OptimizedImage,
  ImageOptimizationWrapper,
  InjectImageOptimizationCSS,
  optimizeImageSrc,
  useImagePreloader,
  ImagePerformanceMonitor,
  useMaximumPerformance,
  PerformanceMonitor
};