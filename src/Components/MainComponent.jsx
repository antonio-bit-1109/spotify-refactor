import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/logo/logo.png";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Navbar, Nav, FormControl } from "react-bootstrap";

const MainComponent = () => {
    const searchHandler = (event) => {
        event.preventDefault();
        // Add your search logic here
    };

    return (
        <div>
            <Container fluid>
                <Row>
                    {/* START sidebar-verticale */}
                    <Col sx={2}>
                        <div>
                            <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
                                <div className="container flex-column align-items-start">
                                    <a className="navbar-brand" href="index.html">
                                        <img src={Logo} alt="Spotify Logo" width="131" height="40" />
                                    </a>
                                    <Button
                                        className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarNavAltMarkup"
                                        aria-controls="navbarNavAltMarkup"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </Button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div className="navbar-nav">
                                            <ul>
                                                <li>
                                                    <a className="nav-item nav-link d-flex align-items-center" href="#">
                                                        <i className="bi bi-house-door-fill"></i>&nbsp; Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="nav-item nav-link d-flex align-items-center" href="#">
                                                        <i className="bi bi-book-fill"></i>&nbsp; Your Library
                                                    </a>
                                                </li>
                                                <li>
                                                    <Form onSubmit={searchHandler} className="input-group mt-3">
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                id="searchField"
                                                                placeholder="Search"
                                                                aria-label="Search"
                                                                aria-describedby="basic-addon2"
                                                            />

                                                            <Button variant="outline-secondary" type="submit">
                                                                GO
                                                            </Button>
                                                        </InputGroup>
                                                    </Form>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-btn">
                                    <Button className="btn signup-btn" variant="primary">
                                        Sign Up
                                    </Button>
                                    <Button className="btn login-btn" variant="success">
                                        Login
                                    </Button>
                                    <Nav.Link href="#">Cookie Policy</Nav.Link> |<Nav.Link href="#">Privacy</Nav.Link>
                                </div>
                            </Navbar>
                        </div>
                    </Col>
                    {/* END sidebar-verticale */}

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
                </Row>
            </Container>
        </div>
    );
};

export default MainComponent;
