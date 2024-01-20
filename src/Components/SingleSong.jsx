import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { ArrowBarLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const convertToDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
};

const SingleSong = () => {
    const canzonePreferita = useSelector((state) => state.FetchAlMount.singolaSongPreferita);
    console.log("CANZONEPREFERITASELEZIONATA", canzonePreferita);
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        <Link to={"/ListaPreferiti"}>
                            <ArrowBarLeft className="display-1 mt-5 text-light" />
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={12} md={8} lg={6} xl={6} xxl={5}>
                        {" "}
                        <Card className="mt-5">
                            <Card.Img variant="top" src={canzonePreferita.album.cover_medium} />
                            <Card.Body>
                                <Card.Title> {canzonePreferita.title}</Card.Title>
                                <Card.Text className="my-1">{canzonePreferita.album.title}</Card.Text>
                                <Card.Text>
                                    contenuti Espliciti: {canzonePreferita.explicit_lyrics === true ? "Si" : "No"}
                                </Card.Text>
                                <h6> Durata: {convertToDuration(canzonePreferita.duration)} min</h6>
                                {/* <Card.Text>{canzonePreferita.album.title}</Card.Text>
                                <Card.Text>{canzonePreferita.album.title}</Card.Text>
                                <Card.Text>{canzonePreferita.album.title}</Card.Text>
                                <Card.Text>{canzonePreferita.album.title}</Card.Text>
                                <Card.Text>{canzonePreferita.album.title}</Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SingleSong;
