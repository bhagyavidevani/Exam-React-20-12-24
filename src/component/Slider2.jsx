// import React from 'react'
import { Card, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import { RiRedPacketLine } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiTruckLine } from "react-icons/ri";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

function Slider2() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <>
      <Container>
        <div className="slider2-container p-b-100 position-relative">
          <Slider {...settings}>
            <div className='slider2-content'>
            <Card style={{ width: '18rem' }}>
              <Card.Body className='text-center'>
                 <div><RiRedPacketLine /></div>
                 <h4>Product Packing</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </Card.Body>
            </Card>
            </div>
            <div className='slider2-content'>
            <Card style={{ width: '18rem' }}>
              <Card.Body className='text-center'>
                 <div><RiCustomerService2Fill /></div>
                 <h4>24X7 Support</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </Card.Body>
            </Card>
            </div>
            <div className='slider2-content'>
            <Card style={{ width: '18rem' }}>
              <Card.Body className='text-center'>
                 <div><RiTruckLine /></div>
                 <h4>Delivery in 5 Days</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </Card.Body>
            </Card>
            </div>
            <div className='slider2-content'>
            <Card style={{ width: '18rem' }}>
              <Card.Body className='text-center'>
                 <div><RiMoneyDollarBoxLine /></div>
                 <h4>Payment Secure</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </Card.Body>
            </Card>
            </div>
          </Slider>
        </div>
      </Container>
    </>
  )
}

export default Slider2
