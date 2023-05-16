'use client'

import React from 'react';
import * as Icons from 'react-icons/bs';

export default function ScroolTop(props: any){
    const TopScrool = () =>{
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         })
    }
    React.useEffect(() =>{
        const buttonScrool =document.querySelector('button.button-top-scrool');
        function scroolSetting(){
            if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                buttonScrool?.classList.add('actived');
            }else{
                buttonScrool?.classList.remove('actived');
            }
        }
        window.onscroll = () => scroolSetting();
    }, [])

    return(
        <>
            <button className="button-top-scrool" onClick={TopScrool}><Icons.BsFillArrowUpCircleFill size={'22px'}/></button>
        </>
    )
}