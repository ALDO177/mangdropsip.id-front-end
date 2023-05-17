
'use client'

import React from "react";

export default class VariantProduk extends React.Component{
    public constructor(props: any){
        super(props)
    }

    public render(): React.ReactNode {
        return(
            <>
                <div className='variant'>
                    <span>Pilih Warna</span>
                    <div className="d-flex gap-3 mt-2">
                        {
                            Array.from({length: 4}).map((val, idx) => (
                                <button key={idx} type='button' style={{width: '85px'}} className='btn btn-outline-info'>Merah</button>
                            ))
                        }
                    </div>
                </div>
                <div className='variant mt-4'>
                    <span>Pilih Ukuran</span>
                    <div className="d-flex gap-3 mt-2">
                        {
                            Array.from({length: 3}).map((val, idx) => (
                                <button key={idx} type='button' style={{width: '75px'}} className='btn btn-outline-info'>40</button>
                            ))
                        }
                    </div>
                </div>
                <hr />
            </>
        )
    }
}