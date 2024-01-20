import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const convertToDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
};

const ListPreferiteSong = () => {
    const listaCanzoniPreferite = useSelector((state) => state.FetchAlMount.allSongPreferiteObj);
    console.log("listaCanzoniPreferite", listaCanzoniPreferite);

    return (
        <>
            {" "}
            <Container>
                <Row className="justify-content-end">
                    <Col xs={12}>
                        <div className="text-light d-flex align-items-center flex-column justify-content-end my-4">
                            <h1 className="display-3 ms-auto">Le tua lista delle canzoni preferite :</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            {listaCanzoniPreferite.length > 0 ? (
                <Container>
                    <Row className="justify-content-end">
                        <Col xs={12} sm={12} md={10} lg={8} xl={10} xxl={10}>
                            <div className="mt-5">
                                {listaCanzoniPreferite.map((song) => (
                                    <Row className="my-2" key={song.id}>
                                        <Col className="border p-1">
                                            <div className="d-flex text-light gap-4 align-items-end">
                                                <img src={song.album.cover_small} alt="immagine album artista " />
                                                <h4>{song.title}</h4>
                                                <h6>{song.album.title}</h6>
                                                <h6>{convertToDuration(song.duration)}</h6>
                                                {/*  <h5>{song.}</h5>
                                                <h5>{song.}</h5>
                                                <h5>{song.}</h5>
                                                <h5>{song.}</h5> */}
                                            </div>
                                        </Col>
                                    </Row>
                                ))}
                            </div>
                        </Col>
                    </Row>{" "}
                </Container>
            ) : (
                <Container>
                    <Row className="justify-content-end">
                        <Col xs={12} sm={12} md={10} lg={8} xl={10} xxl={10}>
                            <div
                                style={{ height: "30vh" }}
                                className="text-light d-flex align-items-center flex-column justify-content-end"
                            >
                                {" "}
                                <h2>Non hai salvato nessuna canzone nei preferiti!</h2>
                                <div>
                                    <NavLink to={"/"}>
                                        <Button className="mt-3">Torna alla Home</Button>
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default ListPreferiteSong;
