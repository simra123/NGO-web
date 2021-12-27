import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Form, Card, Button } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const ProfileSettings = () => {

    return (
        <div className="forms" style={ { marginTop: 70 } } >
            <Row>
                <Col md={ { span: 8, offset: 2 } } >
                    <h2 className="text-dark text-center mb-5">UPDATE PROFILE</h2>
                    <Card >
                        <Card.Body>
                            <Form >
                                <Row>
                                    <Col xs="12" md="6">
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="custom-input"
                                                placeholder="Update your Name"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <Form.Group className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                className="custom-input"
                                                placeholder="Update your Password"
                                            />

                                        </Form.Group>
                                    </Col>
                                    <Col xs="12" md="12">
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                className="custom-input"
                                                placeholder="Update your Email"
                                            />
                                        </Form.Group>
                                    </Col>
                                    {/* <Col xs="12" md="12">
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
                            </Col> */}

                                </Row>
                                <Button variant="primary" type="submit">
                                    Next
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default ProfileSettings;