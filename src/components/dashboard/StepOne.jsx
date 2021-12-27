import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Form, Card, Button } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep }) => {

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <>
            <Card >
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
                                        type="email"
                                        className="custom-input"
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="12">
                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="address"
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
                            <Col xs="12" md="12">
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={ 3 }
                                        className="custom-input"
                                    />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Button variant="primary" type="submit">
                            Next
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default StepOne;