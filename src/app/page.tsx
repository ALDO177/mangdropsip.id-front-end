'use client'
import Image from 'next/image'
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import MegaBannerSliders from '../Home/MegaBannerSliders';
import ChildBanner from '@/Home/ChildBanner';
import pulsa from '../assets/pulsa.png';
import SlidersCategorySection from '@/Home/SlidersCategorySection';
import BrandProduk from '@/component/BrandProduk';
import BrandProdukBanner from '@/component/BrandProdukBanner';
import BannerAdvertisment from '@/component/Banner/BannerAdvertisment';
import SelectionProduks from '@/component/SelectionProduk';

export default class Home extends React.Component{   

  public constructor(props: any){
      super(props)
  }

  render(): React.ReactNode {
    return (
      <Container className='mt-3 mb-3'>
          <section className="banner-head">
              <div className="megabanner">
                  <MegaBannerSliders/>
              </div>
              <div className="child-banner">
                  <ChildBanner/>
              </div>
          </section>
          <Row className="row-cols row-cols-md-2 row-cols-lg-2 g-1 mt-3">
              <Col className="col-lg-2">
                  <Card className="w-100 border-0 shadow-sm bg-section-puls">
                      <Card.Body className="d-flex align-items-center justify-content-center" style={{height: '122px'}}>
                          <div className="d-block">
                              <Image src={pulsa} className="d-block mx-auto" alt="" />
                              <div>Pulsa dan Tagihan</div>
                          </div>
                      </Card.Body>
                  </Card>
              </Col>
              <Col className="col-lg-10">
                  <Card className="w-100 border-0 shadow-sm bg-category-section" style={{height: '122px'}}>
                      <Card.Body>
                          <SlidersCategorySection/>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
          <BrandProduk/>
          <BrandProdukBanner/>
          <BannerAdvertisment/>
          <SelectionProduks/>
      </Container>
    )
  }
}
