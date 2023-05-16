'use client'


import React from 'react'
import { Button } from 'react-bootstrap'
import * as Icons from 'react-icons/bs';
import { PropsSocialMedia } from '../../interface/Props';
import Link from 'next/link';

export default class SocialMedia extends React.Component<PropsSocialMedia>{

    constructor(props: PropsSocialMedia){
        super(props);
        this.AuthTypeAccount = this.AuthTypeAccount.bind(this);
    }

    public AuthTypeAccount() : JSX.Element | any{

        const { type } = this.props;
        switch(type.toLocaleUpperCase()){
            case 'LOGIN':
                return <> Belum Punya Akun ? <Link href={'/auth/register'} className={'text-decoration-none'}><strong className="text-info">Daftar Sekarang</strong></Link></>
                break;
            case 'REGISTER':
                return <> Sudah Punya Akun ? <Link href={'/auth/login'} className={'text-decoration-none'}><strong className="text-info">Login Sekarang</strong></Link></>
                break;
            default:
                throw new Error('Error Type....')
        }
    }

   public render(): React.ReactNode {
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