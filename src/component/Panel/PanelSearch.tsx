'use client'

import React from "react";
import { Form, InputGroup } from 'react-bootstrap'
import * as Icons from 'react-icons/bs';
import { motion } from "framer-motion";

const AnimatePanel = {
  show:{
    opacity: 1,
    width: '615px',
    x:0
  },
  hidde:{
    opacity: 0,
    x: 10
  }
}

export default class PanelSearch extends React.Component{
    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
       return (
         <motion.div 
            transition={{duration: 0.4}} 
            initial={"hidde"} animate={"show"} 
            variants={AnimatePanel}>
            <InputGroup>
                <Form.Control 
                  size="lg" 
                  type="search" 
                  placeholder="Cari Produk"/>
                <InputGroup.Text><Icons.BsSearch/></InputGroup.Text>
            </InputGroup>
         </motion.div>
       )
    }
}