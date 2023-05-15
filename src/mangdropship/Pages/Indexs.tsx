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
                <section className="d-flex gap-1">
                    <div style={{ width: '60%' }}>
                        <MegaBannerSliders/>
                    </div>
                    <div style={{ width: '40%' }}>
                        <ChildBanner/>
                    </div>
                </section>
           </Container>
        )
    }
}