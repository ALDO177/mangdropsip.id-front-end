
import React from 'react';
import { BadgeIdUmkm } from '../../interface/Props/VariantCardProduk';

interface PropsBadge{
    badge: BadgeIdUmkm,
}
export default class BadgesCard extends React.Component<PropsBadge>{
    public constructor(props: PropsBadge){
        super(props);
        this.ElementProcedure = this.ElementProcedure.bind(this);
    }

    public ElementProcedure() : JSX.Element | any{
        const badges =  this.props.badge;
        console.log(Object.entries(badges));
        return <></>
    }

    public render(): React.ReactNode {
        return (
            <this.ElementProcedure/>
        )
    }
}