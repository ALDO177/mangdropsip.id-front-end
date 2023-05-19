'use client'

import React from "react";


export default class ElementPengiriman extends React.Component{

   public render(): React.ReactNode {
        return(
            <>
                <p>Pengiriman</p>
                <div className="d-flex gap-5 mt-4">
                    <p>Pengiriman Ke: </p>
                    <div className="fs-mang">
                        <p className="chev">KEC.TUREN, KABUPATEN MALANG</p>
                        <div className="chev auto mt-2">JNE (Reguler) Rp25.000</div>
                    </div>
                </div>
                <hr />
            </>
        )
    }
}