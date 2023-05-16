'use client'
import React from "react";
import { Container } from 'react-bootstrap';
import PanelMangdropship from "../Panel/PanelMangdropship";

export default class AuthLayout extends React.Component<any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Container className="d-flex align-items-center justify-content-evenly" style={{height: '93vh'}}>
                <PanelMangdropship/>
                { this.props?.children }
            </Container>
        )
    }

}