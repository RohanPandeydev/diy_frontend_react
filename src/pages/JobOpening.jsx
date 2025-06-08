import React, { useState, lazy, Suspense } from "react";
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import { Button, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
import { PiSuitcaseSimpleBold, PiSuitcaseSimpleThin } from 'react-icons/pi'
import { FaLocationDot } from 'react-icons/fa6'
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));

const JobOpening = () => {
    const seo = useSeoHelmet("job-openings"); // Fetch SEO by slug

    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />
            <Banner title={"Job Openings"}
                description={"Crafting Engineering Excellence"}
            />

            <section className="common-section job-openings">
                <Container>
                    <div className='job-opening-content'>
                        <span><PiSuitcaseSimpleBold /></span>
                        <h3>Open Job Positions</h3>
                    </div>
                    <div className='Job-filter'>
                        <Row>
                            <Col md={3} lg={4}>
                                <FormGroup>
                                    <Label for="exampleSelect">
                                        Job Title
                                    </Label>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="text"
                                        placeholder="Enter Job Title"
                                    >

                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={3} lg={4}>
                                <FormGroup>
                                    <Label for="exampleSelect">
                                        Select Category
                                    </Label>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                    >
                                        <option>
                                            Accountant
                                        </option>
                                        <option>
                                            Engineer
                                        </option>
                                        <option>
                                            3D Designer
                                        </option>
                                        <option>
                                            HR
                                        </option>
                                        <option>
                                            Sales Officer
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={3} lg={4}>
                                <FormGroup>
                                    <Label for="exampleSelect">
                                        Select Location
                                    </Label>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                    >
                                        <option>
                                            Kolkata
                                        </option>
                                        <option>
                                            Surat
                                        </option>
                                        <option>
                                            Udaipur
                                        </option>
                                        <option>
                                            Jaipur
                                        </option>
                                        <option>
                                            Delhi
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            {/* <Col md={3} lg={1}>
                <Button className='common-btn'>Submit</Button>
              </Col> */}
                        </Row>
                    </div>
                    <div className='job-listing-box'>
                        <div className='job-listing-title'>
                            <h4 className='job-title'>Accountant</h4>
                            <ul className='job-listing-icons'>
                                <li><PiSuitcaseSimpleThin /> Company</li>
                                <li><FaLocationDot />Jaipur, India</li>
                            </ul>
                        </div>
                        <div className='job-date'>
                            <p>Posted on: 01/01/2024</p>
                            <p><strong>No of vacancies: </strong>2</p>
                        </div>
                        <Button className='common-btn'>Apply Now</Button>
                    </div>
                    <div className='job-listing-box'>
                        <div className='job-listing-title'>
                            <h4 className='job-title'>Accountant</h4>
                            <ul className='job-listing-icons'>
                                <li><PiSuitcaseSimpleThin /> Company</li>
                                <li><FaLocationDot />Jaipur, India</li>
                            </ul>
                        </div>
                        <div className='job-date'>
                            <p>Posted on: 01/01/2024</p>
                            <p><strong>No of vacancies: </strong>2</p>
                        </div>
                        <Button className='common-btn'>Apply Now</Button>
                    </div>
                    <div className='job-listing-box'>
                        <div className='job-listing-title'>
                            <h4 className='job-title'>Accountant</h4>
                            <ul className='job-listing-icons'>
                                <li><PiSuitcaseSimpleThin /> Company</li>
                                <li><FaLocationDot />Jaipur, India</li>
                            </ul>
                        </div>
                        <div className='job-date'>
                            <p>Posted on: 01/01/2024</p>
                            <p><strong>No of vacancies: </strong>2</p>
                        </div>
                        <Button className='common-btn'>Apply Now</Button>
                    </div>
                </Container>
            </section>

            <Suspense fallback={<div>Loading visual section...</div>}>
                <WaveWrapper />
            </Suspense>

            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>
        </div>
    )
}

export default JobOpening