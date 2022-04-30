import React, { useEffect, useState } from 'react'
import { Accordion, Alert, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Plan() {

    const cropName = useParams()
    const [plan, setPlan] = useState()
    const [load, setLoad] = useState(false)

    useEffect(() => {
        try {
            if (cropName.cropname === "beans-bush") {
                setPlan({
                    "name": "beans-bush",
                    "days": "60",
                    "wait": "2",
                    "weather": "summer",
                    "soilType": "Bush beans thrive in full sun and well-drained soil. Enrich the soil prior to planting to avoid fertilizing later. Soil should be neutral or slightly acidic soil with a pH of 6.0 to 6.8. Apply lime if pH levels are below 5.8.",
                    "sow": "Sow seeds 2-5cm (1-2″) deep, 5-8cm (2-3″) apart, in rows 45-60cm (18-24″) apart. Thin to at least 15cm (6″) apart in each row. If the weather is too wet, beans can also be started in pots indoors and set out carefully a few weeks later. For a continuous harvest, plant at 3 week intervals"
                })
            }
            if (cropName.cropname === "lettuce-leaf") {
                setPlan({
                    "name": "lettuce-leaf",
                    "days": "45",
                    "wait": "2",
                    "weather": "cool weather",
                    "soilType": "Deep loamy soils Deep loamy soils with a pH range of 5.5 to 6.6 with higher organic matter content and good drainage are suited for cauliflower cultivation. 375 g/ha seeds are required.",
                    "sow": "Sow your seeds in fertile material at a depth of half an inch (1.25 cm) and water them thoroughly. Cover the soil with plastic wrap until the seeds have sprouted. Cauliflower seed germination usually takes 8 to 10 days. When the seedlings appear, remove the plastic and keep the soil evenly moist."
                })
            }
            if (cropName.cropname === "cauliflower") {
                setPlan({
                    "name": "cauliflower",
                    "days": "57",
                    "wait": "2",
                    "weather": "spring fall",
                    "soilType": "Always strive to achieve a pH level of 6.0 to 7.0 for the soil. An ideal potting mix should be a perfect blend of fertile soil and vermicompost. If you are growing lettuce in pots, you can also mix equal parts of any natural compost such as dry leaves or grass, food scraps,",
                    "sow": "Start seeds indoors in early spring, or simply sow fresh seeds where you want them to grow. Scatter seeds atop prepared soil, about one-half inch apart, and barely cover them before patting them into place. Sow more seeds in summer for a fall crop"
                })
            }
            setLoad(true)
        } catch (error) {

        }
    }, [])


    // console.log(cropName)
    return (
        <div>
            {load ? <><Alert variant="light">
                <Alert.Heading><h1 className='text-center'>Plan for {capitalizeFirstLetter(plan.name)}</h1></Alert.Heading>
            </Alert>
                <hr />

                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>#1 Requirments</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                <Row>
                                    <Col sm={4}><strong>Days to grow : </strong></Col>
                                    <Col sm={8}>{plan.days}</Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><strong>Days to wait after harvest : </strong></Col>
                                    <Col sm={8}>{plan.wait}</Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><strong>To be grown during : </strong></Col>
                                    <Col sm={8}>{plan.weather}</Col>
                                </Row>
                                {/* <Row>
                                    <Col sm={4}><strong>Seeds that you will need : </strong></Col>
                                    <Col sm={8}>Hybrid</Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><strong>Fertilisers that you will need : </strong></Col>
                                    <Col sm={8}>Ammonium Nitrate (AN)</Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><strong>Pestisides that you will need : </strong></Col>
                                    <Col sm={8}>Plantic Total Plant Care or Similar</Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><strong>Water requirment : </strong></Col>
                                    <Col sm={8}>Normal</Col>
                                </Row> */}
                            </Container>

                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>#2 Procedure</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                SOIL TYPE: -<br/>
                                {plan.soilType}
                                <hr />
                                HOW TO SOW?<br/>
                                {plan.sow}

                                {/* <Row>
                                    <Col sm={4}><strong>Seeds that you will need : </strong></Col>
                                    <Col sm={8}>Hybrid</Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><strong>Fertilisers that you will need : </strong></Col>
                                    <Col sm={8}>Ammonium Nitrate (AN)</Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><strong>Pestisides that you will need : </strong></Col>
                                    <Col sm={8}>Plantic Total Plant Care or Similar</Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><strong>Water requirment : </strong></Col>
                                    <Col sm={8}>Normal</Col>
                                </Row> */}
                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion></> : <>unable to load data</>}
        </div>
    )
}

export default Plan