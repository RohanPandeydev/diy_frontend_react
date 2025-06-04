import React, { Suspense, lazy } from 'react'
const Footer = lazy(() => import("../common/Footer"));
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import useSeoHelmet from '../hooks/ReactHelmet';
import SeoHelmet from '../common/SeoHelmet';
const SustainbilityInPreFab = () => {
    const seo = useSeoHelmet("sustainability-in-prefab"); // Fetch SEO by slug

    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />
            <Banner
                title={"Blog and News"}
                description={"Sustainability In Prefab"}
            />
            <div>

            </div>

            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>


        </div>
    )
}

export default SustainbilityInPreFab