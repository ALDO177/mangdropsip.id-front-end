import React from "react";
import { NavLink } from 'react-router-dom';

interface Props{
    to:string,
    children: JSX.Element;
}

export default class A_Icons extends React.Component<Props>{

    constructor(props: any){
        super(props);
    }

    static Icons(props?: any) : JSX.Element{
        return <div className="align-self-center">
            { props?.children }
        </div>
    }

    static Label(props?: any){
        return <div className="align-self-center">{ props?.children }</div>
    }

    render(): React.ReactNode {
        const { to } = this.props;
        return (
            <>  
                <NavLink to={ to } className='d-flex gap-2 text-decoration-none text-white'>
                    { this.props?.children }
                </NavLink>
            </>
        )
    }
}