import React, { Suspense, lazy } from 'react'
const Footer = lazy(() => import("../common/Footer"));
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import SeoHelmet from '../common/SeoHelmet';
import useSeoHelmet from '../hooks/ReactHelmet';
const ConstructionTipsandTricks = () => {
      const seo = useSeoHelmet("construction-tips-tricks"); // Fetch SEO by slug

    return (
        <div>
                  <SeoHelmet seo={seo} />

            <NavBar />
            <Banner
                title={"Blog and News"}
                description={"Construction Tips & Tricks"}
            />
            <div>

            </div>

            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>


        </div>
    )
}

export default ConstructionTipsandTricks