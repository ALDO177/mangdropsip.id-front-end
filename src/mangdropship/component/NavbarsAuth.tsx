import React from "react";
import { Navbar, Container,Button } from 'react-bootstrap'
import Plant from "./Plant";
import logo from '../../assets/logo-mang.png';
import * as Icons from 'react-icons/bs';
import { Link, Location, NavLink, To } from "react-router-dom";
import PanelSearch from "./Panel/PanelSearch";

interface Props{
  location?: Location,
}

interface PropsButtonAction{
   children?: JSX.Element | any,
   to?: string | any,
}

export default class NavbarsAuth extends React.Component<Props>{

    constructor(props: Props){
        super(props);
        this.ControlPanelSearch = this.ControlPanelSearch.bind(this);
        this.pathnames = this.pathnames.bind(this);
    }

    protected pathnames() : string | undefined{
      const { location } =  this.props;
      return location?.pathname.substring(1, location?.pathname.length);
    }

    protected ButtonActionControl(props: PropsButtonAction) : JSX.Element | any{
       return (
          <Link
              to={props.to}
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
           case 'login':
              return(
                <this.ButtonActionControl to={'/'}>
                    Halaman Depan
                </this.ButtonActionControl>
              )
           case 'register':
              return (
                <this.ButtonActionControl to={'/'}>
                    Halaman Depan
                </this.ButtonActionControl>
              )
           default:
              return <>
                   <PanelSearch/>
                   <this.ButtonActionControl to={'/login'}>
                     Masuk Atau Daftar
                   </this.ButtonActionControl>
                   <div className="align-self-center"><Icons.BsCart2 size={'22px'}/></div>
              </>
       }
    }

    render(): React.ReactNode {
       return (
        <>
            <Plant/>
            <Navbar className="bg-mang" expand="lg" sticky="top">
              <Container className="text-white">
                <Navbar.Brand href="#home"><img src={ logo } width={'188px'}/></Navbar.Brand>
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