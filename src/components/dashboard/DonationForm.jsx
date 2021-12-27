import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Final from "./StepThree";
import ThankYou from "./Thankyou";

const DonationForm = () => {
    //state for steps
    const [step, setstep] = useState(1);

    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setstep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
    };

    switch (step) {
        case 1:
            return (
                <div >
                    <Container>

                        <Row className="forms">

                            <Col md={ { span: 8, offset: 2 } } className="custom-margin">
                                <div className="steps-bar">
                                    <div className="d-flex mx-auto">
                                        <div className="bar on"></div>
                                        <div className="bar"></div>
                                        <div className="bar"></div>
                                    </div>

                                    <h5> <span>1</span> Personal Information</h5>
                                </div>
                                <StepOne nextStep={ nextStep } />
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        case 2:
            return (
                <div >
                    <Container>

                        <Row className="forms">

                            <Col md={ { span: 8, offset: 2 } } className="custom-margin">
                                <div className="steps-bar">
                                    <div className="d-flex mx-auto">
                                        <div className="bar "></div>
                                        <div className="bar on"></div>
                                        <div className="bar"></div>
                                    </div>

                                    <h5> <span>2</span>  Donation Details</h5>
                                </div>
                                <StepTwo nextStep={ nextStep } prevStep={ prevStep } />
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        case 3:
            return (
                <div >
                    <Container>

                        <Row className="forms">

                            <Col md={ { span: 8, offset: 2 } } className="custom-margin">
                                <div className="steps-bar">
                                    <div className="d-flex mx-auto">
                                        <div className="bar "></div>
                                        <div className="bar"></div>
                                        <div className="bar on"></div>
                                    </div>

                                    <h5> <span>3</span> Payment Details</h5>
                                </div>
                                <Final nextStep={ nextStep } prevStep={ prevStep } />
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        default:
            return (
                <div>
                    <ThankYou />
                </div>
            );
    }
}

export default DonationForm;