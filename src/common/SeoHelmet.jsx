import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const injectRawScripts = (scripts = [], position = 'head') => {
  scripts.forEach((html) => {
    const temp = document.createElement('div');
    temp.innerHTML = html.trim();
    const scriptTag = temp.querySelector('script');
    if (scriptTag) {
      const script = document.createElement('script');
      if (scriptTag.src) script.src = scriptTag.src;
      script.text = scriptTag.innerHTML;
      Array.from(scriptTag.attributes).forEach(attr =>
        script.setAttribute(attr.name, attr.value)
      );
      if (position === 'head') {
        document.head.appendChild(script);
      } else {
        document.body.appendChild(script);
      }
    }
  });
};

const SeoHelmet = ({ seo }) => {
  if (!seo) return null;

  let jsonLd = null;
  let customHeadScripts = [];
  let customFooterScripts = [];

  try {
    jsonLd = seo.json_ld ? JSON.parse(seo.json_ld) : null;
  } catch (e) {
    console.warn('Invalid JSON-LD:', e);
  }

  try {
    customHeadScripts = seo.custom_head_scripts
      ? JSON.parse(seo.custom_head_scripts)
      : [];
    customFooterScripts = seo.custom_footer_scripts
      ? JSON.parse(seo.custom_footer_scripts)
      : [];
  } catch (e) {
    console.warn('Invalid custom script JSON:', e);
  }

  useEffect(() => {
    injectRawScripts(customHeadScripts, 'head');
    injectRawScripts(customFooterScripts, 'body');
  }, [customHeadScripts, customFooterScripts]);

  return (
    <Helmet>
      {/* Title and Meta */}
      <title>{seo.meta_title || seo.title}</title>
      {seo.meta_description && <meta name="description" content={seo.meta_description} />}
      {seo.meta_keywords && <meta name="keywords" content={seo.meta_keywords} />}
      {seo.robots && <meta name="robots" content={seo.robots} />}
      {seo.google_cseid && <meta name="google" content={`cse_id=${seo.google_cseid}`} />}
      {seo.canonical_url && <link rel="canonical" href={seo.canonical_url} />}

      {/* Open Graph */}
      <meta property="og:type" content={seo.og_type || 'website'} />
      {seo.og_title && <meta property="og:title" content={seo.og_title} />}
      {seo.og_description && <meta property="og:description" content={seo.og_description} />}
      {seo.og_image && <meta property="og:image" content={seo.og_image} />}
      <meta
        property="og:url"
        content={typeof window !== 'undefined' ? window.location.href : ''}
      />

      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SeoHelmet;
