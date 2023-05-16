import AuthLayout from "@/component/Auth/AuthLayout";
import React from "react";

export default function RootLayout(props: any){
    return (
        <>
            <AuthLayout>
                { props?.children }
            </AuthLayout>
        </>
    )
}