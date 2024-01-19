import React from "react";
import { Col, Row } from "react-bootstrap";

const MainPage = () => {
    return (
        <>
            <Col xs={12} md={9} className=" offset-md-3 mainPage">
                <div>
                    <Row>
                        <Col xs={9} lg={11} className=" mainLinks d-none d-md-flex">
                            <a href="#">TRENDING</a>
                            <a href="#">PODCAST</a>
                            <a href="#">MOODS AND GENRES</a>
                            <a href="#">NEW RELEASES</a>
                            <a href="#">DISCOVER</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10}>
                            <div id="searchResults" style={{ display: "none" }}>
                                <h2>Search Results</h2>
                                <Row className="imgLinks py-3" xs={1} sm={2} lg={3} xl={4}></Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} id="rock">
                            <h2>Rock music</h2>
                            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rockSection"></Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} id="pop">
                            <h2>Pop Culture</h2>
                            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="popSection"></Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={10} id="hiphop">
                            <h2>#HipHop</h2>
                            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="hipHopSection"></Row>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Row></Row>
        </>
    );
};

export default MainPage;
