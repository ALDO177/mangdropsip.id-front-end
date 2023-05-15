
import { Splide } from '@splidejs/splide';
import React from 'react';
import banner from '../../../assets/banner3.png';

export default class ChildBanner extends React.Component{

    constructor(props: any){
        super(props);
    }

    componentDidMount(): void {
        (async() =>{
            const splides = document.querySelectorAll('.splides');
            splides.forEach((element) => {
                new Splide(element.className, {
                    arrows: false,
                    pagination: false,
                    autoWidth: true,
                    // autoHeight: true
                });
            })
        })();
    }

    render(): React.ReactNode {
        return (
            <>
                <section className="splides" aria-label="Splide Banner 1">
                    <div className="splide__track">
                        <ul className="splide__list">
                            <li className="splide__slide"><img src={banner} width={'350px'} height={'106px'} alt="Banner 1"/></li>
                        </ul>
                    </div>
                </section>
                <section className="splides mt-1" aria-label="Splide Banner 2">
                    <div className="splide__track">
                        <ul className="splide__list">
                            <li className="splide__slide"><img src={banner} width={'350px'} height={'106px'} alt="Banner 2"/></li>
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}