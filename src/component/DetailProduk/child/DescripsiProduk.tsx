'use client'
import React from 'react'

export default class DescripsiProduk extends React.Component{

    public render(): React.ReactNode {
        return(
            <>
                <p className='fs-mang'>Deskripsi Produk</p>
                <div className='fs-mang mt-2'>
                    <div>
                        Bawang goreng khas brebes.Di jamin kriuk dan gurih, berat netto 160-170 gram.
                        Cocok untuk tambahan makanan di rumah atau pun pedagang kuliner     
                    </div>
                    <div className='mt-3'>
                         TERIMA PARTAI BESAR (jangan khawatir produk kami selalu baru karena Kita suppliers ke pasar dan penjual bakso dll, jadi perputaran cepat ) Terima Pesanan = Call us 0812-8780-129
                    </div>
                    <div className='mt-3'>
                        SERTIFIKAT.NIB.RI.0501230056796
                    </div>
                    <div className='mt-3'>
                        STOK SELALU READY.. SILAHKAN LANGSUNG DIPESAN 😊(OPEN RESELLER / DROPSHIPER)
                    </div>
                    <div className='mt-3'>
                        Note :- Fast Response 07.00 - 21.00 (Weekdays), 07.00-21.00 (Weekend)- Pesanan di atas pukul 13.00 akan langsung di proses namun masuk dikirim esok hari
                    </div>
                </div>
            </>
        )
    }
}