import React from 'react'
import { Container, Table } from 'reactstrap'
import { FaLocationArrow, FaWarehouse } from 'react-icons/fa'



const benefitsList = [
    {
        id: 1,
        title: "Super Fast Project Timelines",
        description: `With prefab, 80% of the work is done in the factory. On-site assembly takes a fraction of the time compared to laying bricks, curing concrete, or managing dozens of laborers`
    },
    {
        id: 2,
        title: "Budget-Friendly & Transparent",
        description: `Get clear costs up front. No hidden labor charges, no escalating bills. You save on both materials and time — two major budget drivers.`
    },
    {
        id: 3,
        title: "Site Cabins",
        description: `Prefab buildings are essential for site cabins, offering quick setup and easy relocation. They provide durable, weather-resistant spaces ideal for on-site offices and worker accommodations. With efficient construction and cost savings, prefab cabins enhance project mobility and productivity.`
    },
    {
        id: 4,
        title: "Development & fabrication",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
    {
        id: 5,
        title: "Development & fabrication",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
    {
        id: 6,
        title: "Development & fabrication",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
    {
        id: 7,
        title: "Development & fabrication",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
    {
        id: 8,
        title: "Development & fabrication",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
]

const casesBoxList = [
    {
        id: 1,
        title: "WareHouse",
        description: `Prefab buildings offer a fast, cost-effective solution for modern warehouse construction. Their modular design ensures quicker installation, reduced labor, and minimal site disruption. With durability and scalability, prefab structures are ideal for dynamic warehouse needs.`
    },
    {
        id: 2,
        title: "Offices Shops",
        description: `Prefab buildings offer a fast, cost-effective solution for modern office and shop spaces. They reduce construction time, minimize waste, and ensure consistent quality. Ideal for businesses seeking flexibility and scalability, prefab structures meet today's dynamic needs.`
    },
    {
        id: 3,
        title: "Site Cabins",
        description: `Prefab buildings are essential for site cabins, offering quick setup and easy relocation. They provide durable, weather-resistant spaces ideal for on-site offices and worker accommodations. With efficient construction and cost savings, prefab cabins enhance project mobility and productivity.`
    },
    {
        id: 4,
        title: "Development & fabrication",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
    {
        id: 5,
        title: "Development & fabrication",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
    {
        id: 6,
        title: "Development & fabrication",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
    {
        id: 7,
        title: "Development & fabrication",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
    {
        id: 8,
        title: "Development & fabrication",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
    {
        id: 9,
        title: "Development & fabrication",
        description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`
    },
]

const comparisonList = [
    {
        id: 1,
        feature: "Speed of Construction",
        prefab: "30–60% faster – most structures ready in weeks",
        conventional: "Slower – often takes several months"
    },
    {
        id: 2,
        feature: "Speed of Construction",
        prefab: "30–60% faster – most structures ready in weeks",
        conventional: "Slower – often takes several months"
    },
]
const KeyBenefits = () => {
    return (
        <div>
            <NavBarHead />
            <BannerSection title={"Key Benefits OF Prefab Construction"} />
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
                                        <tr key={index.id}>
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

            <OurVisionMission />
            <CounterSection />

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

            <TrustSlider />

            <TestimonialSection />

            <WaveWrapper />
            <Footer />
        </div>
    )
}

export default KeyBenefits