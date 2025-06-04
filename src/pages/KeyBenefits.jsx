import React, { lazy, Suspense } from 'react';
import { Container, Table } from 'reactstrap';
import { FaLocationArrow, FaWarehouse } from 'react-icons/fa';

import { benefitsList, casesBoxList, comparisonList } from '../Constants';
import CounterCard from '../common/CounterCard';
import OurVision from '../common/OurVision';
import Banner from '../common/Banner';
import WhoWeAre from '../common/WhoWeAre';
import NavBar from '../common/NavBar';
import SeoHelmet from '../common/SeoHelmet';
import useSeoHelmet from '../hooks/ReactHelmet';

// Lazy-loaded components
const TrustSlider = lazy(() => import('../common/TrustSlider'));
const TestimonialCard = lazy(() => import('../common/TestimonialCard'));
const WaveWrapper = lazy(() => import('../common/WaveWrapper'));
const Footer = lazy(() => import('../common/Footer'));

const KeyBenefits = () => {
    const seo = useSeoHelmet("key-benefits-of-prefab-construction"); // Fetch SEO by slug

    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />
            <Banner title={"Key Benefits OF Prefab Construction"} />
            <WhoWeAre />

            <section className="comparison-section">
                <Container>
                    <div className="comparison-container">
                        <h2>Prefab vs Conventional: A Side-by-Side Comparison</h2>
                        <div className='comparison-container-box'>
                            <Table responsive bordered hover>
                                <thead className='common-table-thead'>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Prefab / PEB Construction</th>
                                        <th>Conventional Construction</th>
                                    </tr>
                                </thead>
                                <tbody className='common-table-tbody'>
                                    {comparisonList.map((compare, index) => (
                                        <tr key={index}>
                                            <td>{compare.feature}</td>
                                            <td>{compare.prefab}</td>
                                            <td>{compare.conventional}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="information-section">
                <Container>
                    <div className='benefits-cases-container'>
                        {benefitsList.map((item, index) => (
                            <div className="info-box" key={index}>
                                <FaLocationArrow className="info-box-icons" />
                                <h6>{item.title}</h6>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <OurVision />
            <CounterCard />

            <section className="information-section">
                <h2 className='benefit-page-h2'>Real-World Use Cases</h2>
                <Container>
                    <div className='real-world-cases-container'>
                        {casesBoxList.map((item, index) => (
                            <div className="info-box" key={index}>
                                <FaWarehouse className="info-box-icons" />
                                <h6>{item.title}</h6>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Lazy loaded sections */}
            <Suspense fallback={<div className="lazy-loader">Loading...</div>}>
                <TrustSlider />
                <TestimonialCard />
                <WaveWrapper />
                <Footer />
            </Suspense>
        </div>
    );
};

export default KeyBenefits;
