'use client'

import React from "react";

interface PropsLayout{
    children?: React.ReactNode
}
export default class Layout extends React.Component<PropsLayout>{

    public constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return(
            <>
                {this.props?.children}
            </>
        )
    }
}