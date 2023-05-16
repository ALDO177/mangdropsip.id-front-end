'use client'
import React from "react";
import { Card } from "react-bootstrap";
import banner from '../assets/banner2.png';
import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import Image from "next/image";

export default class MegaBannerSliders extends React.Component<any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Splide hasTrack={false} style={{padding: '0px'}} 
                options={{
                    arrows: false,
                    rewind: true,
                    type: 'loop',
                    pagination: false,
                    autoWidth: true,
                    autoHeight: false,
                    perPage:1,
                    width: '100%',
                    autoplay: true,
                    interval: 5000,
                }}>
                <SplideTrack>
                    <SplideSlide>
                        <Image src={banner} height={234} alt="asoasjfif"/>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        )
    }
}