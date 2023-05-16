'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import './globals.css';
import { Inter } from 'next/font/google';
import React, { Suspense } from 'react';
import Loading_V1 from '@/Loading/Loading_V1';
import Navbars from '../component/Navbars';
import ScroolTop from '@/component/ScroolTop';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mangdropship',
  description: 'Web Ecomerce Mangdropship',
}

interface StateFromLoading{
  loading?: boolean,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading]  = React.useState<StateFromLoading>();
  React.useEffect(() =>{
     (async() =>{
        setTimeout(() =>{
          setLoading({loading: true})
        }, 2000)
     })()
  })
  
  return (
    <html lang="en">
      <body className={inter.className}>
           {
              !loading?.loading ? <Loading_V1/> : 
              <> 
                <Navbars/>
                <ScroolTop/>
                <Suspense fallback={<Loading/>}>
                  { children }
                </Suspense>
              </>
           }
        </body>
    </html>
  )
}
