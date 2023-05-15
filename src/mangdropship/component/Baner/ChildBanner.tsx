
import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import React from 'react';
import banner from '../../../assets/banner3.png';
import banner4 from '../../../assets/banner4.png';

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
                            <img src={banner}  height={'115px'} alt="Banner 1"/>
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
                            <img src={banner4}  height={'115px'} alt="Banner 2"/>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </>
        )
    }
}