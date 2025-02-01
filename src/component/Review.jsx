// import React from 'react'
import Slider from 'react-slick';
import review1 from '../assets/images/review1.jpg'
import review2 from '../assets/images/review2.jpg'
import review3 from '../assets/images/review3.jpg'

import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { Col, Container, Row } from 'react-bootstrap';



function Review() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <>
       <div>
              <div className="sub-title text-center">
                <h2 className="fw-bold">Great Words From People</h2>
                <div className="sub-title-p">
                  <p className="pb-5 pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore lacus vel facilisis. 
                  </p>
                </div>
              </div>
              <Container>
                <Row className='review'>
                  <Slider {...settings}>
                    <Col xs={12} sm={6} md={4} lg={3} >
                      <div className='testimonial m-2'>
                          <div className="testimonialImg">
                            <img src={review1} alt="review1" width={'100%'}/>
                            
                          </div>
                          <div className='text-center p-4'>
                              <span>Co Founder</span>
                              <h4>Stephen Smith</h4>
                              <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                              <div className='star fs-5 mt-2'>
                                <IoIosStar style={{ marginRight: '3px' }} />
                                <IoIosStar style={{ marginRight: '3px' }} />
                                <IoIosStar style={{ marginRight: '3px' }} />
                                <IoIosStar style={{ marginRight: '3px' }} />
                                <IoIosStar style={{ marginRight: '3px' }} />
                              </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <div className='testimonial m-2'>
                        <div className="testimonialImg">
                          <img src={review2} alt="review2" width={'100%'}/>
                        </div>
                        <div className='text-center p-4'>
                              <span>Manager</span>
                              <h4>Lorem Robinson</h4>
                              <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                              <div className='star fs-5 mt-2'>
                                <IoIosStar style={{ marginRight: '3px' }} />
                                <IoIosStar style={{ marginRight: '3px' }} />
                                <IoIosStar style={{ marginRight: '3px' }} />
                                <IoIosStar style={{ marginRight: '3px' }} />
                                <IoIosStarOutline style={{ marginRight: '3px' }} />
                              </div>
                            </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <div className='testimonial m-2'>
                        <div className="testimonialImg">
                          <img src={review3} alt="review3" width={'100%'}/>
                        </div>
                        <div className='text-center p-4'>
                              <span>Team Leader</span>
                              <h4>Saddika Alard</h4>
                              <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                              <div className='star fs-5 mt-2'>
                                <IoIosStar style={{ marginRight: '3px' }} />
                                <IoIosStar style={{ marginRight: '3px' }} />
                                <IoIosStar style={{ marginRight: '3px' }} />
                                <IoIosStar style={{ marginRight: '3px' }} />
                                <IoIosStar style={{ marginRight: '3px' }} />
                              </div>
                            </div>
                      </div>
                    </Col>
                  </Slider>
                </Row>
              </Container>
             
          </div>
    </>
  )
}

export default Review
