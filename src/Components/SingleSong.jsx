import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";

const SingleSong = () => {
    const canzonePreferita = useSelector((state) => state.FetchAlMount.singolaSongPreferita);
    console.log("CANZONEPREFERITASELEZIONATA", canzonePreferita);
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12} md={8} lg={6} xl={6} xxl={5}>
                        {" "}
                        <Card className="mt-5">
                            <Card.Img variant="top" src={canzonePreferita.album.cover_medium} />
                            <Card.Body>
                                <Card.Title> {canzonePreferita.title}</Card.Title>
                                <Card.Text>{canzonePreferita.album.title}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SingleSong;
