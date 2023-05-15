
import React from 'react';
import banner from '../../../assets/banner2.png';
import { Splide } from '@splidejs/splide';

export default class MegaBannerSliders extends React.Component<any>{
    constructor(props: any){
        super(props)
    }

    componentWillUnmount(): void {
        
    }

    componentDidMount(): void {
        (async() => {
            new Splide('.splide', {
                arrows: false,
                type: 'loop',
                pagination: false,
                autoWidth: true,
                autoHeight: false,
                perPage:1,
                width: '100%',
                autoplay: true,
                interval: 5000,
            }).mount();
        })();
    }

    render(): React.ReactNode {
        return (
            <section className="splide"
                aria-label="Splide Basic HTML Example"
                style={{padding: '0px'}}>
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide"><img src={banner} height={'234px'} alt="" /></li>
                        <li className="splide__slide"><img src={banner} height={'234px'} alt="" /></li>
                    </ul>
                </div>
            </section>
        )
    }
}