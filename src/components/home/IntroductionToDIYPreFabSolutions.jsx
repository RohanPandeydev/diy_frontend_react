import React from 'react'
import { Container } from 'reactstrap'
import { FaWarehouse } from 'react-icons/fa'

import NavBarHead from '../../component/navbar/NavBarHead'
import BannerSection from '../../component/bannerSection/BannerSection'
import WhoWeAre from '../../component/whoWeAre/WhoWeAre'
import OurVisionMission from '../../component/ourVisionMission/OurVisionMission'
import CounterSection from '../../component/counter/CounterSection'
import TrustSlider from '../../component/trustSlider/TrustSlider'
import TestimonialSection from '../../component/testimonialSection/TestimonialSection'
import WaveWrapper from '../../component/waveWrapper/WaveWrapper'
import Footer from '../../component/footer/Footer'
import Banner from '../../common/Banner'


const infoBoxList = [
    {
        id: 1,
        title: "Experience & dependability",
        description: `With years of hands-on expertise, "DIY PreFab"delivers reliable, high-quality prefab building solutions tailored to your needs.`
    },
    {
        id: 2,
        title: "Licensing deals & scalability",
        description: `Unlock growth with "DIY PreFab"through strategic licensing deals and scalable building solutions tailored for every market.`
    },
    {
        id: 3,
        title: "Holistic & custom approach",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
    {
        id: 4,
        title: "Development & fabrication",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
]

const IntroductionToDIYPreFabSolutions = () => {
    const slideVariants = {
        initial: {
            x: '100vw',
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 60,
                damping: 20,
                duration: 0.5,
            },
        },
        exit: {
            x: '-100vw',
            opacity: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                damping: 20,
                duration: 0.5,
            },
        },
    };

    return (
        <div>
            <NavBarHead />
            <Banner title={"Introduction To DIY PreFab Solutions"} description={"Crafting Engineering Excellence"} />
            <WhoWeAre />

            <section className="information-section">
                <Container>
                    <div className='information-container'>
                        {infoBoxList.map((item, index) => (
                            <div className="info-box" key={index}>
                                <FaWarehouse className="info-box-icons" />
                                <h6>{item.title}</h6>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <OurVisionMission />
            <CounterSection />
            <TrustSlider />

            <TestimonialSection />

            <WaveWrapper />
            <Footer />
        </div>
    )
}

export default IntroductionToDIYPreFabSolutions