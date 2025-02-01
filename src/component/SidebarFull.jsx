import { Row,Col,Form,Card,Pagination,Tab,Tabs} from 'react-bootstrap'
import { RiGridLine } from "react-icons/ri";
import { RiListIndefinite } from "react-icons/ri";
// import FormRange from 'react-bootstrap/FormRange'
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { RiHeartLine } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import { RiEyeLine } from "react-icons/ri";
import style1 from '../assets/images/style1.jpg';
import style2 from '../assets/images/style2.jpg';
import style3 from '../assets/images/style3.jpg';
import style4 from '../assets/images/style4.jpg';
import style5 from '../assets/images/style5.jpg';
import style7 from '../assets/images/style7.jpg';
import style11 from '../assets/images/style11.jpg';
import style12 from '../assets/images/style12.jpg';
import style13 from '../assets/images/style13.jpg';
import Header3 from './Header3';

function SidebarFull() {
  let active = 1;
   let items = [];
   for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
  return (
    <>
     <Header3/>
     <div className='category' style={{paddingTop:'80px'}}>
                
                <div className='shopSection'>
                  <div className=''>
                      <div>
                        <div className="">
                            {/* <a href="javascript:void(0)" style={{fontSize:'25px'}}><RiGridLine /></a> */}
                            {/* <a href="javascript:void(0)" style={{fontSize:'25px'}}><RiListIndefinite /></a> */}
                            <Tabs
                            defaultActiveKey="home"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            
                          >
                            <Tab eventKey="home" title=<RiGridLine />>
                            <div>
                              <Row className='g-3'>
                                  <Col xs={12} sm={6} md={4} lg={3}>
                                  <Card className="p-3 position-relative">
                                    <div className="imgBox">
                                    <Card.Img
                                        variant="top"
                                        src={style5}
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
                                        src={style7}
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
                                        <a href="javascript:void(0)">Bakery</a>
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
                                          Delicious white baked fresh bread and toast
                                        </a>
                                        <p className="price fw-bold">
                                          $20<span className="fw-normal ps-2">$22.10</span>
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
                                        src={style12}
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
                                        <a href="javascript:void(0)">Bakery</a>
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
                                        Sweet crunchy nut mix 250gm pack
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
                                        src={style11}
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
                                        <a href="javascript:void(0)">Bakery</a>
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
                                        Sweet crunchy nut mix 250gm pack
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
                                        src={style13}
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
                                        <a href="javascript:void(0)">Bakery</a>
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
                                        Sweet crunchy nut mix 250gm pack
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
                                        src={style5}
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
                              </Row>
                            </div>
                            </Tab>
                            <Tab eventKey="profile" title=<RiListIndefinite />>
                            <div className='singal'>
                              <Row className='g-3'>
                                <Col>
                                    <Card className="p-3  product-card">
                                      <div className='position-relative'>
                                          <div className="imgBox border">
                                          <Card.Img
                                            variant="left"
                                            src={style5}
                                            className="position-relative rounded"
                                            style={{ transition: "transform 0.5s ease",height:'250px',width:'250px' }}
                                      
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
                                      </div>
                                      <Card.Body className="product-body">
                                      <div className="icon-3 border">
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
                                          <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                                          </p>
                                          <ul className='my-3'>
                                            <li>
                                                <label className='fw-bold me-2'>Brand :</label>
                                                ESTA BETTERU CO
                                            </li>
                                            <li className='my-1'>
                                                <label className='fw-bold me-2'>Diet Type :</label>
                                                Vegetarian
                                            </li>
                                            <li>
                                                <label className='fw-bold me-2'>Speciality :</label>
                                                Gluten Free, Sugar Free
                                            </li>
                                          </ul>
                                          <p className="price fw-bold">
                                            $120.25<span className="fw-normal ps-2">$123.25</span>
                                          </p>
                                      </div>
                                      </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="p-3  product-card">
                                      <div className='position-relative'>
                                          <div className="imgBox border">
                                          <Card.Img
                                            variant="left"
                                            src={style1}
                                            className="position-relative rounded"
                                            style={{ transition: "transform 0.5s ease",height:'250px',width:'250px' }}
                                      
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
                                      </div>
                                      <Card.Body className="product-body">
                                      <div className="icon-3 border">
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
                                          {/* <IoIosStarOutline style={{ marginRight: "3px" }} /> */}
                                          <span style={{ fontSize: "13px", color: "gray" }}>(5.0)</span>
                                      </div>
                                      <div>
                                          <a href="javascript:void(0)" className="text fw-semibold my-3">
                                            Best snakes with hazel nut pack 200gm
                                          </a>
                                          <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                                          </p>
                                          <ul className='my-3'>
                                            <li>
                                                <label className='fw-bold me-2'>Brand :</label>
                                                ESTA BETTERU CO
                                            </li>
                                            <li className='my-1'>
                                                <label className='fw-bold me-2'>Diet Type :</label>
                                                Vegetarian
                                            </li>
                                            <li>
                                                <label className='fw-bold me-2'>Speciality :</label>
                                                Gluten Free, Sugar Free
                                            </li>
                                          </ul>
                                          <p className="price fw-bold">
                                            $145<span className="fw-normal ps-2">$150</span>
                                          </p>
                                      </div>
                                      </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="p-3  product-card">
                                      <div className='position-relative'>
                                          <div className="imgBox border">
                                          <Card.Img
                                            variant="left"
                                            src={style2}
                                            className="position-relative rounded"
                                            style={{ transition: "transform 0.5s ease",height:'250px',width:'250px' }}
                                      
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
                                      </div>
                                      <Card.Body className="product-body">
                                      <div className="icon-3 border">
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
                                          {/* <IoIosStar style={{ marginRight: "3px" }} /> */}
                                          <IoIosStar style={{ marginRight: "3px" }} />
                                          <IoIosStarOutline style={{ marginRight: "3px" }} />
                                          <span style={{ fontSize: "13px", color: "gray" }}>(4.5)</span>
                                      </div>
                                      <div>
                                          <a href="javascript:void(0)" className="text fw-semibold my-3">
                                            Fresh organic apple 1kg simla marming
                                          </a>
                                          <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                                          </p>
                                          <ul className='my-3'>
                                            <li>
                                                <label className='fw-bold me-2'>Brand :</label>
                                                ESTA BETTERU CO
                                            </li>
                                            <li className='my-1'>
                                                <label className='fw-bold me-2'>Diet Type :</label>
                                                Vegetarian
                                            </li>
                                            <li>
                                                <label className='fw-bold me-2'>Speciality :</label>
                                                Gluten Free, Sugar Free
                                            </li>
                                          </ul>
                                          <p className="price fw-bold">
                                            $120.25<span className="fw-normal ps-2">$123.25</span>
                                          </p>
                                      </div>
                                      </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="p-3  product-card">
                                      <div className='position-relative'>
                                          <div className="imgBox border">
                                          <Card.Img
                                            variant="left"
                                            src={style3}
                                            className="position-relative rounded"
                                            style={{ transition: "transform 0.5s ease",height:'250px',width:'250px' }}
                                      
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
                                      </div>
                                      <Card.Body className="product-body">
                                      <div className="icon-3 border">
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
                                          {/* <IoIosStar style={{ marginRight: "3px" }} /> */}
                                          {/* <IoIosStar style={{ marginRight: "3px" }} /> */}
                                          <IoIosStarOutline style={{ marginRight: "3px" }} />
                                          <IoIosStarOutline style={{ marginRight: "3px" }} />
                                          <span style={{ fontSize: "13px", color: "gray" }}>(3.2)</span>
                                      </div>
                                      <div>
                                          <a href="javascript:void(0)" className="text fw-semibold my-3">
                                            Organic fresh venila farm watermelon 5kg
                                          </a>
                                          <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                                          </p>
                                          <ul className='my-3'>
                                            <li>
                                                <label className='fw-bold me-2'>Brand :</label>
                                                ESTA BETTERU CO
                                            </li>
                                            <li className='my-1'>
                                                <label className='fw-bold me-2'>Diet Type :</label>
                                                Vegetarian
                                            </li>
                                            <li>
                                                <label className='fw-bold me-2'>Speciality :</label>
                                                Gluten Free, Sugar Free
                                            </li>
                                          </ul>
                                          <p className="price fw-bold">
                                            $50.30<span className="fw-normal ps-2">$72.60</span>
                                          </p>
                                      </div>
                                      </Card.Body>
                                    </Card>
                                </Col>
                              </Row>
                              </div>
                            </Tab>
                          </Tabs>
                        </div>
                      </div>
                  </div>
                </div>
                
                <div className='d-flex justify-content-center align-items-center'>
                  <Pagination className='mt-5'>{items}</Pagination>
                </div>
      </div>
    </>
  )
}

export default SidebarFull
