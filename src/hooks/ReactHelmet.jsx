import { useEffect, useState } from 'react';
import SeoServices from '../services/SeoServices';

const useSeoHelmet = (slug) => {
  const [seo, setSeo] = useState(null);

  useEffect(() => {
    const fetchSeo = async () => {
      try {
        // const res = await axios.get(`http://localhost:3000/api/seo/${slug}`);
        const res = await SeoServices.seoBySlug({ slug });
        if (res.data?.status) {
          setSeo(res.data.data);
        }
      } catch (err) {
        console.error('SEO fetch failed', err);
      }
    };

    fetchSeo();
  }, [slug]);

  return seo;
};

export default useSeoHelmet;
