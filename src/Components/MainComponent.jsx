import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SideBarvertical from "./SideBarvertical";
import MainPage from "./MainPage";

const MainComponent = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    {/* START sidebar-verticale */}
                    <SideBarvertical />
                    {/* END sidebar-verticale */}

                    {/* start MAIN PAGE */}
                    <MainPage />
                    {/* end MAIN PAGE */}
                </Row>
            </Container>
        </div>
    );
};

export default MainComponent;
