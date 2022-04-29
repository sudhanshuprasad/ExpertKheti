import React from 'react'
import { Accordion, Alert, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Plan() {
    const cropName = useParams()
    // console.log(cropName)
    return (
        <div>
            <Alert variant="light">
                <Alert.Heading><h1 className='text-center'>Plan for {capitalizeFirstLetter(cropName.cropname)}</h1></Alert.Heading>
            </Alert>
            <hr />

            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>#1 Requirments</Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Row>
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
                            </Row>
                        </Container>

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>#2 Procedure</Accordion.Header>
                    <Accordion.Body>
                        <Container>
                        <Row>
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
                            </Row>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Plan