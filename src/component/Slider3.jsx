// import React from 'react'
import Slider from 'react-slick';
import { Col, Container, Row,Card } from 'react-bootstrap'
import productRaghtview from '../assets/images/productsRightview.jpg'
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { RiHeartLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import style1 from '../assets/images/style1.jpg';
import style2 from '../assets/images/style2.jpg';
import style3 from '../assets/images/style3.jpg';
import style4 from '../assets/images/style4.jpg';
import style5 from '../assets/images/style5.jpg';
import { IoIosStarOutline } from "react-icons/io";

function Slider3() {
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
      <div className='p-b-100 section-popular'>
        <Container>
            <Row>
              <Col lg={7}>
                <Slider {...settings}>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <Card className="p-3 position-relative">
                        <div className="imgBox">
                          <Card.Img
                            variant="top"
                            src={style1}
                            className="position-relative rounded"
                            style={{ transition: "transform 0.5s ease" }}
                          />
                        </div>
                        <div className="side-view">
                          <a href="javascript:void(0)" className="wishlist">
                            <RiHeartLine />
                          </a>
                          <a href="javascript:void(0)" className="model-oraganic-product">
                            <RiEyeLine />
                          </a>
                        </div>
                        <Card.Body className="text-center">
                          <div className="icon">
                            <a href="javascript:void(0)">
                              <RiShoppingBagLine className="z-2" />
                            </a>
                          </div>
                          <Card.Title className="my-1">
                            <a href="javascript:void(0)">Snacks</a>
                          </Card.Title>
                          <div className="star fs-5">
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <span style={{ fontSize: "13px", color: "gray" }}>(5.0)</span>
                          </div>
                          <div>
                            <a href="javascript:void(0)" className="text fw-semibold my-3">
                              Best snacks with hazel nut pack 200gm
                            </a>
                            <p className="price fw-bold">
                              $145<span className="fw-normal ps-2">$150</span>
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <Card className='p-3 position-relative'>
                      <div className='imgBox'>
                          <Card.Img
                            variant="top"
                            src={style4}
                            className='position-relative rounded'
                            style={{ transition: 'transform 0.5s ease' }}
                          />
                        </div>
                        <div className='side-view'>
                          <a href="javascript:void(0)" className='wishlist'><RiHeartLine /></a>
                          <a href="javascript:void(0)" className='model-oraganic-product'><RiEyeLine /></a>
                        </div>
                        <Card.Body className='text-center'>
                          <div className='icon'>
                            <a href="javascript:void(0)">
                              <RiShoppingBagLine className='z-2' />
                            </a>
                          </div>
                          <Card.Title className='my-1'>
                            <a href="javascript:void(0)">Snacks</a>
                          </Card.Title>
                          <div className='star fs-5'>
                            <IoIosStar style={{ marginRight: '3px' }} />
                            <IoIosStar style={{ marginRight: '3px' }} />
                            <IoIosStar style={{ marginRight: '3px' }} />
                            <IoIosStar style={{ marginRight: '3px' }} />
                            <IoIosStar style={{ marginRight: '3px' }} />
                            <span style={{ fontSize: '13px', color: 'gray' }}>(5.0)</span>
                          </div>
                          <div>
                            <a href="javascript:void(0)" className='text fw-semibold my-3'>
                              Sweet crunchy nut mix 250gm
                            </a>
                            <p className='price fw-bold'>
                              $120.25<span className='fw-normal ps-2'>$123.25</span>
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <Card className="p-3 position-relative">
                        <div className="imgBox">
                          <Card.Img
                            variant="top"
                            src={style5}
                            className="position-relative rounded"
                            width={'100%'}
                            style={{ transition: "transform 0.5s ease" }}
                          />
                        </div>
                        <div className="side-view">
                          <a href="javascript:void(0)" className="wishlist">
                            <RiHeartLine />
                          </a>
                          <a href="javascript:void(0)" className="model-oraganic-product">
                            <RiEyeLine />
                          </a>
                        </div>
                        <Card.Body className="text-center">
                          <div className="icon">
                            <a href="javascript:void(0)">
                              <RiShoppingBagLine className="z-2" />
                            </a>
                          </div>
                          <Card.Title className="my-1">
                            <a href="javascript:void(0)">Vegetables</a>
                          </Card.Title>
                          <div className="star fs-5">
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <IoIosStarOutline style={{ marginRight: "3px" }} />
                            <span style={{ fontSize: "13px", color: "gray" }}>(4.5)</span>
                          </div>
                          <div>
                            <a href="javascript:void(0)" className="text fw-semibold my-3">
                              Fresh organic villa farm lomon 500gm pack
                            </a>
                            <p className="price fw-bold">
                              $120.25<span className="fw-normal ps-2">$123.25</span>
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <Card className="p-3 position-relative">
                        <div className="imgBox">
                          <Card.Img
                            variant="top"
                            src={style2}
                            className="position-relative rounded"
                            style={{ transition: "transform 0.5s ease" }}
                          />
                        </div>
                        <div className="side-view">
                          <a href="javascript:void(0)" className="wishlist">
                            <RiHeartLine />
                          </a>
                          <a href="javascript:void(0)" className="model-oraganic-product">
                            <RiEyeLine />
                          </a>
                        </div>
                        <Card.Body className="text-center">
                          <div className="icon">
                            <a href="javascript:void(0)">
                              <RiShoppingBagLine className="z-2" />
                            </a>
                          </div>
                          <Card.Title className="my-1">
                            <a href="javascript:void(0)">Fruits</a>
                          </Card.Title>
                          <div className="star fs-5">
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <IoIosStar style={{ marginRight: "3px" }} />
                            <IoIosStarOutline style={{ marginRight: "3px" }} />
                            <span style={{ fontSize: "13px", color: "gray" }}>(4.5)</span>
                          </div>
                          <div>
                            <a href="javascript:void(0)" className="text fw-semibold my-3">
                              Fresh organic apple 1kg Simla marming
                            </a>
                            <p className="price fw-bold">
                              $120<span className="fw-normal ps-2">$123.25</span>
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <Card className='p-3 position-relative'>
                      <div className='imgBox'>
                          <Card.Img
                            variant="top"
                            src={style3}
                            className='position-relative rounded'
                            style={{ transition: 'transform 0.5s ease' }}
                          />
                        </div>
                        <div className='side-view'>
                          <a href="javascript:void(0)" className='wishlist'><RiHeartLine /></a>
                          <a href="javascript:void(0)" className='model-oraganic-product'><RiEyeLine /></a>
                        </div>
                        <Card.Body className='text-center'>
                          <div className='icon'>
                            <a href="javascript:void(0)">
                              <RiShoppingBagLine className='z-2' />
                            </a>
                          </div>
                          <Card.Title className='my-1'>
                            <a href="javascript:void(0)">Fruits</a>
                          </Card.Title>
                          <div className='star fs-5'>
                            <IoIosStar style={{ marginRight: '3px' }} />
                            <IoIosStar style={{ marginRight: '3px' }} />
                            <IoIosStar style={{ marginRight: '3px' }} />
                            <IoIosStarOutline style={{ marginRight: '3px' }} />
                            <IoIosStarOutline style={{ marginRight: '3px' }} />
                            <span style={{ fontSize: '13px', color: 'gray' }}>(3.2)</span>
                          </div>
                          <div>
                            <a href="javascript:void(0)" className='text fw-semibold my-3'>
                              Organic fresh vanilla farm watermelon 5kg
                            </a>
                            <p className='price fw-bold'>
                              $50.30<span className='fw-normal ps-2'>$72.60</span>
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                </Slider>
              </Col>
              <Col lg={5}>
                <div>
                    <img src={productRaghtview} alt="productRaghtview" width={'100%'} height={'450px'} className='rounded position-relative'/>
                </div>
              </Col>  
            </Row>
        </Container>
      </div>
    </>
  )
}

export default Slider3
