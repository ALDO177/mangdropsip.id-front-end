
import { Splide } from '@splidejs/splide';
import React from 'react';
import banner from '../../../assets/banner3.png';

export default class ChildBanner extends React.Component{

    constructor(props: any){
        super(props);
    }

    componentDidMount(): void {
        (async() =>{
            new Splide('.splide', {
                arrows: false,
                pagination: false,
                autoWidth: true,
            });
        })();
    }

    render(): React.ReactNode {
        return (
            <>
                <section className="splide" aria-label="Splide Basic HTML Example" style={{padding: '0px'}}>
                    <div className="splide__track">
                        <ul className="splide__list">
                            <li className="splide__slide"><img src={banner} alt="Image 1"/></li>
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}