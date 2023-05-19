'use client'

import DetailProdukInfo from "@/component/DetailProduk/DetailProdukInfo";
import DetailSlideImageProduk from "@/component/DetailProduk/DetailSlideImageProduk";
import Footers from "@/component/Footer";
import { SlughProps } from "@/interface/Props";
import React from "react";
import { Card, Breadcrumb, Button, InputGroup, Form, Container } from "react-bootstrap";
import * as Icons from 'react-icons/bs';

export default class Pages extends React.Component<SlughProps>{

    public constructor(props: SlughProps){
        super(props)
    }

    public render(): React.ReactNode {
        return(
           <>
                 <div className="detail-panel mb-3">
                    <div className="info-slide-images">
                        <Card className="slides-info-img border-0 shadow-sm" style={{width: '400px'}}>
                            <Card.Body>
                                <DetailSlideImageProduk/>
                            </Card.Body>
                        </Card>
                    </div>
                    <Card className="panel-info border-0 shadow-sm">
                        <Card.Body>
                          <DetailProdukInfo/>
                        </Card.Body>
                        <Card.Footer>
                            <div className="float-start" style={{fontSize: '12px'}}>Terjadi masalah dengan produk ini ? </div>
                            <div className="float-end" style={{fontSize: '12px'}}>
                                <div className="d-flex gap-3">
                                    <Icons.BsExclamationTriangle className="align-self-center"/>
                                    <span> Laporkan Produk</span>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                    <div className="panel-action">
                        <Card className="slides-info-img border-0 shadow-m text-black-50">
                            <Card.Header className="bg-white color-mang">Detail Pembelian</Card.Header>
                            <Card.Body style={{padding: '0px'}}>
                                <Container fluid className="mt-3 fs-mang">
                                    <div className="d-flex gap-4">
                                        <InputGroup style={{width: '140px'}}>
                                            <InputGroup.Text>-</InputGroup.Text>
                                            <Form.Control size="sm" value={1} className="text-center"/>
                                            <InputGroup.Text>+</InputGroup.Text>
                                        </InputGroup>
                                        <div className="align-self-center">
                                            <p className="fs-mang">Stock: <span className="color-mang">20</span></p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-4">
                                        <span className="align-self-center">Subtotal:</span>
                                        <span className="color-mang" style={{fontSize: '17px'}}>Rp.20.000</span>
                                    </div>
                                    <div className="d-flex gap-3 mt-4 justify-content-center">
                                        <button className="button-mang">Keranjang</button>
                                        <button className="button-mang outlines">Beli Sekarang</button>
                                    </div>
                                </Container>
                                <div className="mang-sharing">
                                    <div className="content">
                                        <div className="d-flex gap-3">
                                            <div className="d-flex gap-2">
                                                <Icons.BsChatLeftTextFill className="align-self-center" size={'14px'}/>
                                                <p className="fnt align-self-center">Chat Penjual</p>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <Icons.BsShareFill className="align-self-center" size={'14px'}/>
                                                <p className="fnt align-self-center">Share</p>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <Icons.BsFillHeartFill className="align-self-center" size={'14px'}/>
                                                <p className="fnt align-self-center">Watchlist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Container fluid className="mt-3 mb-3 fs-mang">
                                    <p>Ditawarkan Oleh</p>
                                    <div className="d-flex gap-3 mt-3">
                                        <div style={{borderRadius: '100%', padding: '9px 12px 12px 12px', backgroundColor:'#D9D9D9'}}>
                                            <Icons.BsShop size={'27px'} className="mang-color"/>
                                        </div>
                                        <div className="d-block align-self-center w-100">
                                            <p className="fw-500 color-mang">Fajar Mutiara Group</p>
                                            <div>
                                                <p className="float-start" style={{fontSize: '12px'}}>Kota Gresik</p>
                                                <p className="float-end"   style={{fontSize: '12px'}}>Akrif <span className="fw-bold">2 Hari Lalu</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
           </>
            
        )
    }
}