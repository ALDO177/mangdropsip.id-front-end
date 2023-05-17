'use client'

import React from "react";


export default class ElementPengiriman extends React.Component{

   public render(): React.ReactNode {
        return(
            <>
                <span>Pengiriman</span>
                <div className="d-flex gap-5 mt-4">
                    <span>Pengiriman Ke: </span>
                    <div>
                        <span className="chev">KEC.TUREN, KABUPATEN MALANG</span>
                        <div className="chev auto mt-2">JNE (Reguler) Rp25.000</div>
                    </div>
                </div>
                <hr />
            </>
        )
    }
}