import React, { Suspense, lazy } from 'react'
const Footer = lazy(() => import("../common/Footer"));
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
const BlogandNews = () => {
    return (
        <div>
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