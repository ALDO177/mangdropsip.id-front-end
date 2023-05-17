'use client'

import React from "react";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import img_cart from '../../assets/keranjang.png';
import Image from "next/image";

const mainOptions = {
    type       : 'slide',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
    //autoWidth  : true,
    width      : '100%',
    height     : '20rem',
}

const thumbsOptions = {
    rewind          : false,
    width           : 550,
    height          : 550,
    fixedWidth      : 104,
    fixedHeight     : 58,
    isNavigation    : true,
    gap             : 10,
    focus           : 'center',
    pagination      : false,
    cover           : true,
    top             :0,
    dragMinThreshold: {
    mouse: 4,
    touch: 10,
    },
    breakpoints : {
    640: {
         fixedWidth  : 66,
         fixedHeight : 38,
      },
    },
}

export default class DetailSlideImageProduk extends React.Component<any>{

    private mainRef  : any;
    private thumbRef : any;

    public constructor(props: any){
        super(props);
        this.mainRef   = React.createRef<any>();
        this.thumbRef  = React.createRef<any>();

    }

    public componentDidMount(): void {
        if(this.mainRef.current && this.thumbRef.current && this.thumbRef.current.splide){
            this.mainRef.current.sync(this.thumbRef.current.splide);
        }
    }

    public render(): React.ReactNode {
        return(
            <>
               <div className="d-block">
                    <Splide 
                        ref={this.mainRef}
                        hasTrack={false} 
                        options={mainOptions}
                        style={{padding: '0px'}}>
                        <SplideTrack>
                            {
                                Array.from({length: 5}).map((id, index) => (
                                    <SplideSlide key={index}>
                                        <Image src={img_cart} alt="Splides"/>
                                    </SplideSlide>
                                ))
                            }
                        </SplideTrack>
                    </Splide>
                    <Splide
                        hasTrack={false}
                        ref={this.thumbRef}
                        options={{
                            rewind          : true,
                            width           : 550,
                            height          : 550,
                            fixedWidth      : 104,
                            fixedHeight     : 58,
                            isNavigation    : true,
                            gap             : 10,
                            focus           : 'center',
                            pagination      : false,
                            cover           : true,
                            top             : 0,
                            arrows          : false,
                            dragMinThreshold: {
                            mouse: 4,
                            touch: 10,
                            },
                            breakpoints : {
                            640: {
                                 fixedWidth  : 66,
                                 fixedHeight : 38,
                              },
                            },
                        }}
                        style={{padding: '0px'}}>
                        <SplideTrack>
                            {
                                Array.from({length: 5}).map((id, index) => (
                                    <SplideSlide key={index}>
                                        <Image src={img_cart} alt="Splides"/>
                                    </SplideSlide>
                                ))
                            }
                        </SplideTrack>
                    </Splide>
               </div>
            </>
        )
    }
}