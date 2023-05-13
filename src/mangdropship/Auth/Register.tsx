
import React from 'react'
import AuthLayout from './AuthLayout'
import { Card, Form, InputGroup, Button } from 'react-bootstrap'
import SocialMedia from './SocialMedia'
import * as Icons from 'react-icons/bs';

export default class Register extends React.Component<any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
            <AuthLayout>
                <Card className='border-0 shadow' style={{width: '370px', borderRadius: '10px'}}>
                    <Card.Title></Card.Title>
                    <Card.Body>
                        <Card.Title className="fw-bold text-center text-black-50">Buat Akun Baru</Card.Title>
                         <div className='mt-4'>
                            <Form.Control size='lg' type='text' placeholder='Nama Lengkap'/>
                         </div>
                         <div className='mt-2'>
                            <Form.Control size='lg' type='email' placeholder='Email'/>
                         </div>
                         <div className='mt-2'>
                            <InputGroup>
                              <Form.Control size='lg' type='password' placeholder='Password'/>
                              <InputGroup.Text id="basic-addon1"><Icons.BsEye/></InputGroup.Text>
                            </InputGroup>
                         </div>
                         <div className='mt-2'>
                            <InputGroup>
                              <Form.Control size='lg' type='password' placeholder='Ulangi Password'/>
                              <InputGroup.Text id="basic-addon1"><Icons.BsEye/></InputGroup.Text>
                            </InputGroup>
                         </div>
                         <Button className="form-control bg-info mt-3 border-0" style={{outline: 'none'}}>Masuk</Button>
                         <div className="w-100 d-flex gap-2 mt-3">
                                <div className="align-self-center dash"></div>
                                <span style={{fontSize: '12px'}}>Atau</span>
                                <div className="align-self-center dash"></div>
                         </div>
                         <SocialMedia type='REGISTER'/>
                    </Card.Body>
                </Card>
            </AuthLayout>
        )
    }
}