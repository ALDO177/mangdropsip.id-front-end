'use client'

import React from "react";
import { Card } from "react-bootstrap";
import Produk from "../assets/card_produks.png";
import { BadgeIdUmkm, VariantCardProduk, VariantStateCardProduks } from "../interface/Props";
import SuperProduk from '../assets/super_produks.png';
import Image from "next/image";
import BadgeInfoProduk from "./BadgeInfoProduk";

export default class CardProduk extends React.Component<VariantCardProduk, VariantStateCardProduks>{

    constructor(props: VariantCardProduk){
        super(props);
    }
    public componentWillUnmount(): void {}

    render(): React.ReactNode {
        const { width, produk_info, badge }  = this.props;
        return(
            <Card 
                className="border-1 shadow-sm" 
                style={{width: width === undefined ? '195px' : width, height: '250px'}}>
                 <div className="position-relative">
                     <Image src={ produk_info?.path } className="w-100" alt=""/>
                     <BadgeInfoProduk badges={ badge }/>
                 </div>
                <Card.Body className="body-panel-produk">
                    <span>{produk_info?.nama}</span>
                    <h4>{produk_info?.price}</h4>
                    <span>Terjual 100</span>
                </Card.Body>
            </Card>
        )
    }
}