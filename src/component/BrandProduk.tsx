'use client'
import React from 'react';
import { Card } from 'react-bootstrap';
import brand from '../assets/brand Product 1.png';
import CardProduk from './CardProduk';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { ProduksFromDatabases } from '../Arrays/Produk';
import Image from 'next/image';
import brand_test from '../assets/super-brand 1.png';
import supper from '../assets/super_produks.png';

const OptionSlidersBrandProduks = {
    perPage: 6,
    autoplay: true,
    interval: 1000,
    perMove: 1,
    arrows: false,
    pagination: false,
    autoWidth: false,
    autoHeight: true,
    gap: '0.2rem',
    padding: 0,
}

export default class BrandProduk extends React.Component<any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Card className='w-100 border-0 shadow-sm mt-3'>
                <Card.Header className='bg-white border-bottom-0 shadow-sm'>
                    <div className="d-flex justify-content-between">
                        <div><Image src={ brand } alt="" /></div>
                        <div style={{fontSize: '14px'}}>Lihat Semua</div>
                    </div>
                </Card.Header>
                <Card.Body style={{height: '280px'}}>
                     <Splide 
                        hasTrack={false}
                        options={OptionSlidersBrandProduks}
                        style={{ padding: '0px '}}>
                        <SplideTrack className="d-block mx-auto">
                            {
                                ProduksFromDatabases.map((produks) => (
                                    <SplideSlide key={produks.id}>
                                        <CardProduk produk_info={ produks } badge={{
                                            brand: 
                                            {conditions: true, 
                                            data:{ path : brand_test,
                                                position:   'tops',
                                                }},
                                            super_produk: {conditions: true, 
                                                data:{ path: supper, 
                                                position: 'bottoms', 
                                                }}
                                        }}/>
                                    </SplideSlide>
                                ))
                            }
                        </SplideTrack>
                     </Splide>
                </Card.Body>
            </Card>
        )
    }
}