import React from "react";
import { Card } from "react-bootstrap";
import Produk from "../../assets/card_produks.png";
import { VariantCardProduk, VariantStateCardProduks } from "../interface/Props/VariantCardProduk";
import SuperProduk from '../../assets/super_produks.png';
import BadgesCard from "./BadgesCardProduk/BadgesCard";

export default class CardProduk extends React.Component<VariantCardProduk, VariantStateCardProduks>{

    constructor(props: VariantCardProduk){
        super(props);
    }
    public componentWillUnmount(): void {}

    render(): React.ReactNode {
        const { width }  = this.props;
        return(
            <Card 
                className="border-1 shadow-sm" 
                style={{width: width === undefined ? '195px' : width, height: '250px'}}>
                 <div className="position-relative">
                    <Card.Img src={ Produk } alt="Produks"/>
                    <BadgesCard badge={{brand: true}}/>
                    {/* <div className="position-absolute bottom-0 right-0">
                        <img src={SuperProduk} alt="" />
                    </div> */}
                 </div>
                <Card.Body>
                    Lorem ipsum dolor sit amet.
                </Card.Body>
            </Card>
        )
    }
}