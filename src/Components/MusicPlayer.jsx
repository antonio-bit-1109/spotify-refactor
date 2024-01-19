import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";

const MusicPlayer = () => {
    return (
        <>
            {" "}
            <Container fluid className="fixed-bottom bg-container pt-1">
                <Row className="h-100">
                    <Col lg={10} className="offset-lg-2">
                        <Row className="h-100">
                            <Col lg={10} className="offset-lg-2">
                                <Row className="h-100 flex-column justify-content-center align-items-center">
                                    <Col xs={6} md={4} className="playerControls">
                                        <div className="d-flex align-items-center">
                                            <a href="#">
                                                <img className="icon" src={shuffle} alt="shuffle" />
                                            </a>
                                            <a href="#">
                                                <img className="icon" src={prev} alt="prev" />
                                            </a>
                                            <a href="#">
                                                <img className="icon" src={play} alt="play" />
                                            </a>
                                            <a href="#">
                                                <img className="icon" src={next} alt="next" />
                                            </a>
                                            <a href="#">
                                                <img className="icon" src={repeat} alt="repeat" />
                                            </a>
                                        </div>
                                        <div className="progress mt-3">
                                            <ProgressBar now={0} />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MusicPlayer;
