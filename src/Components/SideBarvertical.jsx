import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/logo/logo.png";
import { BookFill, HouseAddFill } from "react-bootstrap-icons";
import { fetchData } from "../redux/functions/fetchFile";
import { useSelector, useDispatch } from "react-redux";
import { setDataFetchInput } from "../redux/reducers/stateSliceReducer";
import { Link, useLocation } from "react-router-dom";

const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
    },
};

const SideBarvertical = () => {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");
    console.log(inputValue);

    const searchHandler = (event) => {
        event.preventDefault();
        dispatch(fetchData(url, inputValue, options, setDataFetchInput));
    };

    return (
        <>
            <Col sx={2}>
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
                                <Nav className="flex-column">
                                    <Nav.Item>
                                        <Link to={"/"} className="nav-item nav-link d-flex align-items-center">
                                            {<HouseAddFill className="fs-3" />}&nbsp; Home
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link
                                            to={"/ListaPreferiti"}
                                            className="nav-item nav-link d-flex align-items-center"
                                        >
                                            {<BookFill className="fs-3" />}&nbsp; Your Library
                                        </Link>
                                    </Nav.Item>
                                    <Form onSubmit={searchHandler} className="input-group mt-3">
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                id="searchField"
                                                placeholder="Search"
                                                aria-label="Search"
                                                aria-describedby="basic-addon2"
                                                onChange={(event) => setInputValue(event.target.value)}
                                                value={inputValue}
                                            />

                                            <Button variant="outline-secondary" type="submit">
                                                GO
                                            </Button>
                                        </InputGroup>
                                    </Form>
                                </Nav>
                            </div>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <Link to={"/iscriviti"}>
                            <Button className="btn signup-btn" variant="primary">
                                Sign In
                            </Button>
                        </Link>
                        <Button className="btn login-btn" variant="success">
                            Login
                        </Button>
                        <Nav.Link href="#">Cookie Policy</Nav.Link> |<Nav.Link href="#">Privacy</Nav.Link>
                    </div>
                </Navbar>
            </Col>
        </>
    );
};

export default SideBarvertical;
