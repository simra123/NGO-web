import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";


// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, prevStep }) => {

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        e.preventDefault();
        nextStep()
    };
    return (
        <>
            <Card>
                <Card.Body>
                    <Form onSubmit={ submitFormData }>
                        <Row>
                            <Col xs="12" md="6">
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter you First Name"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter you Last Name"
                                    />

                                </Form.Group>
                            </Col>
                            <Col xs="12" md="12">
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="12">
                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter your Address"
                                    />

                                </Form.Group>
                            </Col>
                            <Col xs="12" md="6">
                                <Form.Group className="mb-3">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter your City"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Territory</Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter your Territory"
                                    />

                                </Form.Group>
                            </Col>
                            {/* <Col xs="12" md="12">
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={ 3 }

                                    />
                                </Form.Group>
                            </Col> */}

                        </Row>
                        <div style={ { display: "flex", justifyContent: "space-around" } }>
                            <Button variant="primary" onClick={ prevStep }>
                                Previous
                            </Button>

                            <Button variant="primary" type="submit">
                                Next
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default StepTwo;