'use client'

import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ProduksFromDatabases } from "../Arrays/Produk";
import CardProduk from "./CardProduk";


export default class SelectionProduks extends React.Component<any>{
    public constructor(props: any){
        super(props)
    }

    public render(): React.ReactNode {
        return (
            <Card className="w-100 border-0 mt-3" style={{backgroundColor: 'transparent'}}>
                <Card.Header className="bg-white border-0 shadow-sm">Produk Lainya</Card.Header>
                <Card.Body className="mt-2" style={{padding: '0px'}}>
                    <Row className="row-cols row-cols-md-6 row-cols-5 g-2">
                        {
                            ProduksFromDatabases.map((produks) => (
                                <Col key={produks.id}>
                                    <CardProduk width="210px" produk_info={produks}/>
                                </Col>
                            ))
                        }
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}