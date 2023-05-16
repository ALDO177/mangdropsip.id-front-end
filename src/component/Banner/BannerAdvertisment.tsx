'use client'

import React from "react";
import { Card } from "react-bootstrap";
import advertisment from '../../assets/advertisment.png';
import Image from "next/image";

export default class BannerAdvertisment extends React.Component<any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Card className="w-100 mt-3">
                <Card.Body style={{padding: '0px'}}>
                    <Image src={advertisment} className="w-100" alt="" />
                </Card.Body>
            </Card>
        )
    }
}