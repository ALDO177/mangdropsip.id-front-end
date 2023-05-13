import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import MegaBannerSliders from "../component/Baner/MegaBanerSliders";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import banner from '../../assets/banner3.png';

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
                    <Col className="col-lg-5">
                        <Splide 
                            options={{
                                arrows: false,
                                pagination: false,
                                autoWidth: true,
                            }}
                            aria-label="My Favorite Images" style={{padding: '0px'}}>
                            <SplideSlide>
                                <img src={banner} alt="Image 1"/>
                            </SplideSlide>
                        </Splide>
                        <Splide 
                            options={{
                                arrows: false,
                                pagination: false,
                                autoWidth: true,
                            }}
                            aria-label="My Favorite Images" className="mt-1" style={{padding: '0px'}}>
                            <SplideSlide>
                                <img src={banner} alt="Image 1"/>
                            </SplideSlide>
                        </Splide>
                    </Col>
                </Row>
           </Container>
        )
    }
}