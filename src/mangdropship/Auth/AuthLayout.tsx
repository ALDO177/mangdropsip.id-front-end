import React from "react";
import { Container } from 'react-bootstrap';
import PanelMangdropshipAuth from "../component/Panel/PanelMangdropshipAuth";

export default class AuthLayout extends React.Component<any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Container className="d-flex align-items-center justify-content-evenly" style={{height: '93vh'}}>
                <PanelMangdropshipAuth/>
                { this.props?.children }
            </Container>
        )
    }

}