
'use client'
import React from 'react';
import { Breadcrumb, Button } from 'react-bootstrap';
import BreadcrumbData from './child/BreadCrumbData';
import VariantProduk from './child/VariantProduk';
import ElementPengiriman from './child/ElementPengiriman';
import DescripsiProduk from './child/DescripsiProduk';

export default class DetailProdukInfo extends React.Component{

    public constructor(props: any){
        super(props)
    }

    public render(): React.ReactNode {
        return (
            <div className='mang-panel'>
                <BreadcrumbData/>
                <div className="text-product">
                    [Tasya Farasya Approved] SKINTIFIC - Mugwort Mask Acne Clay Mask 55g Pore Clarifying Mud Mask Wash Off Pack Masker Wajah Facial Mask
                </div>
                <div className='mang-price mt-4'>
                    <strong className='mt-4'>Rp 20000</strong>
                    <h1>Rp18.000</h1>
                </div>
                <hr />
                <VariantProduk/>
                <ElementPengiriman/>
                <DescripsiProduk/>
            </div>
        )
    }
}