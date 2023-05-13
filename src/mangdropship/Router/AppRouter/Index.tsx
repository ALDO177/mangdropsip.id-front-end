
import { Location, Outlet, useLocation, useParams } from 'react-router-dom'
import NavbarsAuth from '../../component/NavbarsAuth'
import React from 'react';
import Loading_v1 from '../../Loading/Loading_v1';
import Footer from '../../component/Footer';
import { motion } from 'framer-motion';
import ScroolTop from '../../component/ScroolTop';

interface Stated{ loading?: boolean }

const AnimateRoute = {
    show:{
        y : 0,
        opacity: 1,
        scale: 1,
    },
    hidde:{
        y:100,
        scale:0.3,
        opacity: 0,
    }
}

export default function(){
    const [stated, setStated]  = React.useState<Stated>();
    const location : Location = useLocation();
    React.useEffect(() =>{
        new Promise(() => {
            setTimeout(() =>{
                setStated({loading: true});
            }, 2000)
        })
    }, []);

    if(!stated?.loading) return <Loading_v1/>
    return (
        <>
            <NavbarsAuth location={location}/>
            <ScroolTop/>
            <motion.div
                 key={Math.random()}
                 transition={{duration: 0.4}}
                 initial={'hidde'}
                 animate={'show'}
                 variants={ AnimateRoute }>
                <Outlet/>
            </motion.div>
            {/* <Footer/> */}
        </>
    )
}