
import React from 'react'
import { Button } from 'react-bootstrap'
import * as Icons from 'react-icons/bs';
import { PropsSocialMedia } from '../interface/Props/Props_app';
import { NavLink } from 'react-router-dom';

export default class SocialMedia extends React.Component<PropsSocialMedia>{
    constructor(props: PropsSocialMedia){
        super(props);
        this.AuthTypeAccount = this.AuthTypeAccount.bind(this);
    }

    public AuthTypeAccount() : JSX.Element | any{

        const { type } = this.props;
        switch(type.toLocaleUpperCase()){
            case 'LOGIN':
                return <> Belum Punya Akun ? <NavLink to={'/register'} className={'text-decoration-none'}><strong className="text-info">Daftar Sekarang</strong></NavLink></>
                break;
            case 'REGISTER':
                return <> Sudah Punya Akun ? <NavLink to={'/login'} className={'text-decoration-none'}><strong className="text-info">Login Sekarang</strong></NavLink></>
                break;
            default:
                throw new Error('Error Type....')
        }
    }

    render(): React.ReactNode {
        return (
            <>
                <div className="mt-3 d-flex gap-3 justify-content-center">
                    <Button type="button" variant="outline-info" className="form-control">
                        <div className="d-flex gap-2 justify-content-center">
                            <Icons.BsGoogle size={'15px'} className="align-self-center"/>
                            <span>Google</span>
                        </div>
                    </Button>
                    <Button type="button" variant="outline-info" className="form-control">
                        <div className="d-flex gap-2 justify-content-center">
                            <Icons.BsFacebook size={'15px'} className="align-self-center"/>
                            <span>Facebook</span>
                        </div>
                    </Button>
                </div>
                <div className="text-center mt-3" style={{fontSize: '12px'}}>
                    <this.AuthTypeAccount/>
                </div>
            </>
        )
    }
}