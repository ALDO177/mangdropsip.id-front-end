'use client'

import React from "react";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { CategoryDatabases } from "@/Arrays/Category";
import { Card } from "react-bootstrap";
import Image from "next/image";
const OptionsSliderCategory = {
    type: 'loop',
    perPage: 7,
    autoplay: true,
    interval: 2000,
    perMove: 1,
    autoHeight: true,
    rewind: true,
    gap: '3rem',
    arrows: false,
    pagination: false
}

export default class SlidersCategorySection extends React.Component<any>{

    constructor(props: any){
        super(props);
    }

    render(): React.ReactNode {
        return(
           <Splide 
                hasTrack={ false }
                options={ OptionsSliderCategory }
                style={{padding: '0px'}}>
                <SplideTrack>
                    {
                        CategoryDatabases.map((category) => (
                            <SplideSlide key={category.id}>
                                <Card className="border-0 shadow-sm">
                                    <Card.Body style={{height: '95px'}} className="text-center">
                                        <Image src={category.path} className="d-block mx-auto" alt="" />
                                        <div className="mt-1" style={{fontSize: '11px'}}><strong>{category.text}</strong></div>
                                    </Card.Body>
                                </Card>
                            </SplideSlide>
                        ))
                    }
                </SplideTrack>
           </Splide>
        )
    }
}