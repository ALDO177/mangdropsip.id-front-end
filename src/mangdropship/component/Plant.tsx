import React from "react";
import { Container } from 'react-bootstrap';
import googlePlay from '../../assets/google-play.png';
import * as Icons from 'react-icons/fa';
import A_Icons from "../../ChildComponent/A_Icons";
import * as Bi from 'react-icons/bi';

export default class Plant extends React.Component{
    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
            <>
                <div className="plant-info">
                    <Container>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex gap-3">
                                <span>Download App</span>
                                <img src={googlePlay} width={'52px'} className="align-self-center"  alt="" />
                                <div className="vr"></div>
                                <span>Ikuti Kami</span>
                                <div className="align-self-center d-flex gap-2">
                                    <Icons.FaTiktok size={'12px'}/>
                                    <Icons.FaFacebookSquare size={'12px'}/>
                                    <Icons.FaInstagramSquare size={'12px'}/>
                                </div>
                            </div>
                            <div className="d-flex gap-3">
                                <A_Icons to="#">
                                    <>
                                        <A_Icons.Icons><Icons.FaVihara size={'15px'}/></A_Icons.Icons>
                                        <A_Icons.Label>Daftar Jadi Suplier</A_Icons.Label>
                                    </>
                                </A_Icons>
                                <A_Icons to="#">
                                    <>
                                        <A_Icons.Icons><Bi.BiColor size={'15px'}/></A_Icons.Icons>
                                        <A_Icons.Label>Bahasa</A_Icons.Label>
                                    </>
                                </A_Icons>
                                <A_Icons to="#">
                                    <>
                                        <A_Icons.Icons><Bi.BiHelpCircle size={'15px'}/></A_Icons.Icons>
                                        <A_Icons.Label>Bantuan</A_Icons.Label>
                                    </>
                                </A_Icons>
                            </div>
                        </div>
                    </Container>
                </div>
            </>
        )
    }
}