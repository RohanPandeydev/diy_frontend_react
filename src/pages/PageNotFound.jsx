import React, { Suspense, lazy } from 'react'
const Footer = lazy(() => import("../common/Footer"));
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
const PageNotFound = () => {
  return (
    <div>
      <NavBar />
      <Banner
        title={"Page Not Found"}
        description={"Comming Soon"}
      />
      <div>

      </div>

      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>


    </div>
  )
}


export default PageNotFound