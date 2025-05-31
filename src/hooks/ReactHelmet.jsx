import { useEffect, useState } from 'react';
import axios from 'axios';

const useSeoHelmet = (slug) => {
  const [seo, setSeo] = useState(null);

  useEffect(() => {
    const fetchSeo = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/seo/${slug}`);
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
