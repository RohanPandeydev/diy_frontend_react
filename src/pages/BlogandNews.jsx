import React, { Suspense, lazy } from 'react'
const Footer = lazy(() => import("../common/Footer"));
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import useSeoHelmet from '../hooks/ReactHelmet';
import SeoHelmet from '../common/SeoHelmet';
const BlogandNews = () => {
      const seo = useSeoHelmet("blog-news"); // Fetch SEO by slug

    return (
        <div>
                  <SeoHelmet seo={seo} />

            <NavBar />
            <Banner
                title={"Blog and News"}
                description={"Engineering Excellence, Industrial Solutions"}
            />
            <div>
                
            </div>

            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>


        </div>
    )
}

export default BlogandNews