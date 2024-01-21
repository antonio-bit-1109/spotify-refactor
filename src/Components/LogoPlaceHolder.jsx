import React from "react";
import logo from "../assets/logo/logo.png";
import { Col, Container, Row } from "react-bootstrap";

const LogoPlaceHolder = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="altezza d-flex align-items-center">
                            <img className="w-100" src={logo} alt="logo spotify" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LogoPlaceHolder;
