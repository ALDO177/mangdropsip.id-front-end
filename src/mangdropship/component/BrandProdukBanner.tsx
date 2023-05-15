import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import produk_indonesia from '../../assets/produk-indonesia.png';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { ProduksFromDatabases } from "../Arrays/Produks";
import CardProduk from "./CardProduk";

const BrandProduksBannersOptions = {
    perPage: 5,
    autoplay: true,
    interval: 1000,
    perMove: 1,
    arrows: false,
    pagination: false,
    autoWidth: true,
    autoHeight: true,
    gap: '1rem',
    padding: 0,
}

export default class BrandProdukBanner extends React.Component<any>{

    constructor(props:any){
        super(props)
    }
    
    render(): React.ReactNode {
        return (
            <Card className="w-100 mt-3 border-0 shadow-sm text-white">
                <Card.Header className="bg-danger">
                    <div className="d-flex justify-content-between">
                        <h6>PRODUK INDONESIA</h6>
                        <div style={{fontSize: '14px'}}>Lihat Semua</div>
                    </div>
                </Card.Header>
                <Card.Body style={{height: '292px'}}>
                    <Row className="row-cols row-cols-md-2 row-cols-lg-2 g-2">
                        <Col className="col-lg-2">
                             <img src={ produk_indonesia } className="d-block mx-auto" alt="" />
                        </Col>
                        <Col className="col-lg-10">
                            <Splide 
                                hasTrack={ false }
                                style={{padding: '0px'}}
                                options={ BrandProduksBannersOptions }>
                                <SplideTrack>
                                    {
                                        ProduksFromDatabases.filter((produk) =>{
                                            return 1;
                                        }).map((produks) => (
                                            <SplideSlide key={produks.id}>
                                                <CardProduk/>
                                            </SplideSlide>
                                        ))
                                    }
                                </SplideTrack>
                            </Splide>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}