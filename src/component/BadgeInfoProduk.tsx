'use client'
import { BadgeIdUmkm } from "@/interface/Props";
import React from "react";
import Image from "next/image";

interface BadgesProps{
    badges: BadgeIdUmkm | undefined
}

export default class BadgeInfoProduk extends React.Component<BadgesProps>{

    public constructor(props: BadgesProps){
        super(props);
        this.idUmkmData = this.idUmkmData.bind(this);
    }

    public idUmkmData() : JSX.Element | any{
        const badges = Object.entries(this.props?.badges === undefined ? {} : this.props.badges);
        if(badges.length > 0){
            return (
               <>
                    {
                        badges.map(([id, data]) => (
                            <div className={data?.data.position} key={id}>
                                <Image src={data?.data.path} alt={id}/>
                            </div>
                        ))
                    }
               </>
            )
        }
        return;
    }

    render(): React.ReactNode {
        return(
            <this.idUmkmData/>
        )
    }
}