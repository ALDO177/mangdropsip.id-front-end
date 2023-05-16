'use client'

import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import React from 'react';
import banner from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import Image from 'next/image';

const OptionsSlideChildBanner = {
    rewind: true,
    padding: 0,
    arrows: false,
    pagination: false
}

export default class ChildBanner extends React.Component{
    constructor(props: any){
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                <Splide 
                    hasTrack={ false }
                    options={ OptionsSlideChildBanner }
                    style={{padding: '0px'}}>
                    <SplideTrack> 
                        <SplideSlide style={{padding: '0px'}}>
                            <Image src={banner}  height={115} alt="Banner 1"/>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
                <Splide 
                    hasTrack={ false } 
                    options={ OptionsSlideChildBanner }
                    style={{padding: '0px'}} 
                    className="mt-1">
                    <SplideTrack > 
                        <SplideSlide>
                            <Image src={banner4}  height={115} alt="Banner 2"/>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </>
        )
    }
}