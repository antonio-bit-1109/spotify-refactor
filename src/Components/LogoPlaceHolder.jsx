import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo/logo.png";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const LogoPlaceHolder = () => {
    const navigate = useNavigate();
    const [switchAnimation, setSwitchAnimation] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSwitchAnimation(true);
        }, 2000);
        setTimeout(() => {
            navigate("/home");
        }, 3000);
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="altezza d-flex align-items-center">
                            {/*     <img className={`w-100{  scale-in-center-enter}`} src={logo} alt="logo spotify" /> */}
                            <img
                                className={`w-100 ${
                                    switchAnimation ? "scale-out-center-exit" : "scale-in-center-enter"
                                }`}
                                src={logo}
                                alt="logo spotify"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LogoPlaceHolder;
