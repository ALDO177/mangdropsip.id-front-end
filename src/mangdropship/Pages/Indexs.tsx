import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import MegaBannerSliders from "../component/Baner/MegaBanerSliders";
import ChildBanner from "../component/Baner/ChildBanner";

export default class Indexs extends React.Component<any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
           <Container className="mt-3">
                <Row className="row-cols row-cols-sm-2">
                    <Col className="col-lg-7 col-sm-7">
                        <MegaBannerSliders/>
                    </Col>
                    <Col className="col-lg-5 col-sm-1">
                       <ChildBanner/>
                    </Col>
                </Row>
           </Container>
        )
    }
}