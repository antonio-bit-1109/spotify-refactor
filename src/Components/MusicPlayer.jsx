import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useDispatch, useSelector } from "react-redux";

const MusicPlayer = () => {
    const datiSong = useSelector((state) => state.FetchAlMount.dataToShowOnMusicPlayer);
    console.log("datiSong", datiSong);

    return (
        <>
            {" "}
            <Container fluid className="fixed-bottom bg-container pt-1">
                <Row className="h-100">
                    <Col lg={10} className="offset-lg-2">
                        <Row className="h-100">
                            <Col lg={10} className="offset-lg-2">
                                <Row className="h-100 justify-content-between align-items-center">
                                    <Col xs={9} sm={9} md={8} className="playerControls">
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
                                        <div className="progress mt-3 w-100">
                                            <ProgressBar now={0} />
                                        </div>
                                    </Col>
                                    {datiSong && (
                                        <Col className="flex-grow-1" xs={3} sm={3} md={3}>
                                            <div className="d-flex justify-content-end">
                                                <div className="h-100 d-flex flex-column">
                                                    <p className=" pe-2 m-0 text-light">{datiSong.title_short}</p>
                                                    <p className=" pe-2 m-0 text-light">{datiSong.album.title}</p>
                                                </div>

                                                <img
                                                    style={{ height: "80px" }}
                                                    src={datiSong.artist.picture}
                                                    alt="img"
                                                />
                                            </div>
                                        </Col>
                                    )}
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
