
export interface PropsSocialMedia{
    type: string,
    children?: JSX.Element,
}

export interface InterfaceCategory{
    id: number,
    path?: string | any,
    text?: string
}

export interface ProduksVariant{
    id:number,
    path: string | any,
    nama: string,
    price: string,
    sold: number
}

export interface VariantIdUmkm{
    conditions?: boolean,
    data?: {
        path: string | any,
        position: string,
    },
}

export interface BadgeIdUmkm{
    brand?: VariantIdUmkm,
    super_produk?: VariantIdUmkm,
    free_ongkir?: VariantIdUmkm,
    flash_sale?: VariantIdUmkm
}

export interface VariantCardProduk{
    width ?: string,
    komisi?: boolean,
    badge ?: BadgeIdUmkm,
    produk_info?: ProduksVariant
}

export interface VariantStateCardProduks{
    
}

export interface PropsVariantBadge{
    umkm?: BadgeIdUmkm
}

export interface SlughProps{
    params?: any,
}
