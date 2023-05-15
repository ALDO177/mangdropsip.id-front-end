import React from "react";
import { Button, Card, Col, Container, Row} from "react-bootstrap";
import MegaBannerSliders from "../component/Baner/MegaBanerSliders";
import ChildBanner from "../component/Baner/ChildBanner";
import puls from '../../assets/pulsa.png';
import SlidersCategorySection from "../component/SlidersCategorySection";
import BrandProduk from "../component/BrandProduk";
import BrandProdukBanner from "../component/BrandProdukBanner";
import BannerAdvertisment from "../component/Baner/BannerAdvertisment";
import SelectionProduks from "../component/SelectionProduks";

export default class Indexs extends React.Component<any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
           <Container className="mt-3 mb-3">
                <section className="banner-head">
                    <div className="megabanner">
                        <MegaBannerSliders/>
                    </div>
                    <div className="child-banner">
                        <ChildBanner/>
                    </div>
                </section>
                <Row className="row-cols row-cols-md-2 row-cols-lg-2 g-1 mt-3">
                    <Col className="col-lg-2">
                        <Card className="w-100 border-0 shadow-sm bg-section-puls">
                            <Card.Body className="d-flex align-items-center justify-content-center" style={{height: '122px'}}>
                                <div className="d-block">
                                    <img src={puls} className="d-block mx-auto" alt="" />
                                    <div>Pulsa dan Tagihan</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-lg-10">
                        <Card className="w-100 border-0 shadow-sm bg-category-section" style={{height: '122px'}}>
                            <Card.Body>
                                <SlidersCategorySection/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <BrandProduk/>
                <BrandProdukBanner/>
                <BannerAdvertisment/>
                <SelectionProduks/>
                <div className="d-flex justify-content-center mt-3">
                    <Button size="sm" style={{width: '232px'}} variant="secondary" className="">Lihat Lainya</Button>
                </div>
           </Container>
        )
    }
}