import React from "react";
import { Card, Form, Button, InputGroup } from "react-bootstrap";
import* as Icons from 'react-icons/bs';
import AuthLayout from "./AuthLayout";
import SocialMedia from "./SocialMedia";

export default class Login extends React.Component{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return(
            <AuthLayout>
                    <Card style={{ width: '370px', minHeight: '400px', border:' none', borderRadius: '10px' }} className="shadow">
                        <Card.Body>
                            <Card.Title className="fw-bold text-center text-black-50">Masuk Dasboard</Card.Title>
                            <div className="mt-4">
                                <Form.Control size="lg" type="email" style={{fontSize: '14px'}} placeholder="No.Handphone/Email"/>
                                <div className="float-end fw-bold mt-2 mb-2" style={{color: '#0A75C3', fontSize: '11px'}}>Lupa Password</div>
                            </div>
                            <div className="mt-2">
                                <InputGroup>
                                    <Form.Control size="lg" type="email" style={{fontSize: '14px'}} placeholder="Password"/>
                                    <InputGroup.Text id="basic-addon1"><Icons.BsEye/></InputGroup.Text>
                                </InputGroup>
                            </div>
                            <Button className="form-control bg-info mt-3 border-0" style={{outline: 'none'}}>Masuk</Button>
                            <div className="w-100 d-flex gap-2 mt-3">
                                <div className="align-self-center dash"></div>
                                <span style={{fontSize: '12px'}}>Atau</span>
                                <div className="align-self-center dash"></div>
                            </div>
                            <SocialMedia type="login"/>
                        </Card.Body>
                    </Card>
            </AuthLayout>
        )
    }
}