'use client'

import React from 'react';
import logo from '../assets/logo-mang.png';
import * as Icons from 'react-icons/bs';
import Plant from './Plant';
import { Navbar, Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import PanelSearh from './Panel/PanelSearch';

interface Props{
    location?: Location,
  }
  
interface PropsButtonAction{
    children?: JSX.Element | any,
    to?: string | any,
}

export default class Page extends React.Component<Props>{

    public constructor(props: Props){
        super(props);
        this.ControlPanelSearch  = this.ControlPanelSearch.bind(this);
        this.ButtonActionControl = this.ButtonActionControl.bind(this);
    }

    protected pathnames() : string | undefined{
        const { pathname } =  new URL(window.location.href);
        return pathname.substring(1, pathname.length);
    }

    protected ButtonActionControl(props: PropsButtonAction) : JSX.Element | any{
        return (
           <Link
               href={props.to}
               style={{backgroundColor: '#00B2DD', width: '200px'}}
               className="btn btn-sm fw-bold text-white border-0 text-decoration-none">
               <div className="d-flex gap-2 justify-content-center">
                   <Icons.BsFillHousesFill className="align-self-center" color={'white'} size={'15px'}/>
                   <span>{props?.children}</span>
               </div>
           </Link>
        )
     }

     protected ControlPanelSearch() : JSX.Element | any{
        switch(this.pathnames()){
            case 'auth/login':
               return(
                 <this.ButtonActionControl to={'/'}>
                     Halaman Depan
                 </this.ButtonActionControl>
               )
            case 'auth/register':
               return (
                 <this.ButtonActionControl to={'/'}>
                     Halaman Depan
                 </this.ButtonActionControl>
               )
            default:
               return <>
                    <PanelSearh/>
                    <this.ButtonActionControl to={'/auth/login'}>
                      Masuk Atau Daftar
                    </this.ButtonActionControl>
                    <div className="align-self-center"><Icons.BsCart2 size={'22px'}/></div>
               </>
        }
     }

    render(): React.ReactNode {
        return(
            <>
                <Plant/>
                <Navbar className="bg-mang" expand="lg" sticky="top">
                    <Container>
                        <Navbar.Brand href="#home"><Image src={ logo } width={188} alt='fasfasf'/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end gap-3">
                            <this.ControlPanelSearch/>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}