
'use client'
import { Breadcrumb } from 'react-bootstrap';

export default function BreadcrumbData(){
    return(
        <>
             <Breadcrumb style={{fontSize: '14px'}}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        Alat Rumah Tangga
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="text-decoration-none" active>Tas Belanja</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}