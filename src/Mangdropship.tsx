import React from "react";
import { StateApp } from "./mangdropship/interface/State/StateApp";
import * as Providers from './mangdropship/Router/main';


export default class Mangdropship extends React.Component<{}, StateApp>{
    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
         return <Providers.default.ProvidersRoute/>
    }
}