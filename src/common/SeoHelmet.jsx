import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";

const injectRawScripts = (scripts = [], position = "head") => {
  scripts.forEach((html) => {
    const temp = document.createElement("div");
    temp.innerHTML = html.trim();
    const scriptTag = temp.querySelector("script");
    if (scriptTag) {
      const script = document.createElement("script");
      if (scriptTag.src) script.src = scriptTag.src;
      script.text = scriptTag.innerHTML;
      Array.from(scriptTag.attributes).forEach((attr) =>
        script.setAttribute(attr.name, attr.value)
      );
      if (position === "head") {
        document.head.appendChild(script);
      } else {
        document.body.appendChild(script);
      }
    }
  });
};

const SeoHelmet = ({ seo }) => {
  // Hook calls must be unconditional, so even if seo is null, hooks run
  // Memoize JSON.parse results to avoid new arrays every render
  const jsonLd = useMemo(() => {
    if (!seo?.json_ld) return null;
    try {
      return JSON.parse(seo.json_ld);
    } catch (e) {
      console.warn("Invalid JSON-LD:", e);
      return null;
    }
  }, [seo?.json_ld]);

  const customHeadScripts = useMemo(() => {
    if (!seo?.custom_head_scripts) return [];
    try {
      return JSON.parse(seo.custom_head_scripts);
    } catch (e) {
      console.warn("Invalid customHeadScripts JSON:", e);
      return [];
    }
  }, [seo?.custom_head_scripts]);

  const customFooterScripts = useMemo(() => {
    if (!seo?.custom_footer_scripts) return [];
    try {
      return JSON.parse(seo.custom_footer_scripts);
    } catch (e) {
      console.warn("Invalid customFooterScripts JSON:", e);
      return [];
    }
  }, [seo?.custom_footer_scripts]);

  useEffect(() => {
    if (customHeadScripts.length > 0) {
      injectRawScripts(customHeadScripts, "head");
    }
    if (customFooterScripts.length > 0) {
      injectRawScripts(customFooterScripts, "body");
    }
  }, [customHeadScripts, customFooterScripts]);

  if (!seo) return null;

  return (
    <Helmet>
      {/* Title and Meta */}
      <title>{seo.meta_title || seo.title}</title>
      {seo.meta_description && (
        <meta name="description" content={seo.meta_description} />
      )}
      {seo.meta_keywords && <meta name="keywords" content={seo.meta_keywords} />}
      {seo.robots && <meta name="robots" content={seo.robots} />}
      {seo.google_cseid && <meta name="google" content={`cse_id=${seo.google_cseid}`} />}
      {seo.canonical_url && <link rel="canonical" href={seo.canonical_url} />}

      {/* Open Graph */}
      <meta property="og:type" content={seo.og_type || "website"} />
      {seo.og_title && <meta property="og:title" content={seo.og_title} />}
      {seo.og_description && <meta property="og:description" content={seo.og_description} />}
      {seo.og_image && <meta property="og:image" content={seo.og_image} />}
      <meta
        property="og:url"
        content={typeof window !== "undefined" ? window.location.href : ""}
      />

      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SeoHelmet;
