'use client'

import React from "react";
import { Container } from "react-bootstrap";
import Footers from "@/component/Footer";
import SelectionProduks from "@/component/SelectionProduk";

interface PropsLayout{
    children?: React.ReactNode
}
export default class Layout extends React.Component<PropsLayout>{

    public constructor(props: any){
        super(props)
    }

    public render(): React.ReactNode {
        return(
           <>
                <Container>
                    { this.props?.children }
                    <SelectionProduks/>
                </Container>
                <Footers/>
           </>
        )
    }
}   