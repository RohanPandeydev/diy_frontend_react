import React, { Suspense, lazy } from 'react'
const Footer = lazy(() => import("../common/Footer"));
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
const IndustryTrends = () => {
    return (
        <div>
            <NavBar />
            <Banner
                title={"Blog and News"}
                description={"Industry Trends"}
            />
            <div>

            </div>

            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>


        </div>
    )
}

export default IndustryTrends