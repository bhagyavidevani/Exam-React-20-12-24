import { Row,Col,Form,Tabs,Tab,Pagination, Container,Card} from 'react-bootstrap'
// import { RiGridLine } from "react-icons/ri";
// import { RiListIndefinite } from "react-icons/ri";
// import FormRange from 'react-bootstrap/FormRange'
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { RiHeartLine } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import { RiEyeLine } from "react-icons/ri";
import style1 from '../assets/images/style1.jpg';
import style2 from '../assets/images/style2.jpg';
import style3 from '../assets/images/style3.jpg';
import style5 from '../assets/images/style5.jpg';
import style14 from '../assets/images/style14.jpg';
import style15 from '../assets/images/style15.jpg';
import style4 from '../assets/images/style4.jpg';
import style16 from '../assets/images/style16.jpg';
import style11 from '../assets/images/style11.jpg';
import style12 from '../assets/images/style12.jpg';
import style13 from '../assets/images/style13.jpg';
import review1 from '../assets/images/review1.jpg'
import review2 from '../assets/images/review2.jpg'
import Header4 from '../component/Header4'
import Slider from 'react-slick';
import { useEffect,useRef,useState } from 'react';

function ProductFull() {
  // Pagination
  let active = 1;
   let items = [];
   for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    // silder
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
    }, []);
  return (
    <>
       <Header4/>
       <div className='mb-5'>
          <div className='category' style={{paddingTop:'80px'}}>
              <Row>
                <Col>
                  <div>
                    <Row>
                      <Col lg={6}>
                        <div>
                          <div className="ProductImg">
                              <div>
                              <div className="slider-container">
                                  <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                                  <div className="border">
                                      <img src={style11} alt="productImg" width={'100%'} height={'100%'} style={{objectFit:'cover',position:'center'}}/>
                                    </div>
                                    <div>
                                      <img src={style13} alt="productImg" width={'100%'} height={'100%'}  style={{objectFit:'cover',position:'center'}}
                                      className='border position-relative rounded'/>
                                    </div>
                                    <div className="imgBox">
                                      <img src={style12} alt="productImg" width={'100%'} height={'100%'}  style={{objectFit:'cover',position:'center'}}/>
                                    </div>
                                    <div className="imgBox">
                                    <img src={style1} alt="productImg" width={'100%'} height={'100%'}  style={{objectFit:'cover',position:'center'}}/>
                                    </div>
                                    <div className="imgBox">
                                      <img src={style4} alt="productImg" width={'100%'} height={'100%'}  style={{objectFit:'cover',position:'center'}}/>
                                    </div>
                                    <div className="imgBox">
                                      <img src={style14} alt="productImg" width={'100%'} height={'100%'}  style={{objectFit:'cover',position:'center'}}/>
                                    </div>
                                    <div className="imgBox">
                                    <img src={style15} alt="productImg" width={'100%'} height={'100%'}  style={{objectFit:'cover',position:'center'}}/>
                                    </div>
                                    <div className="imgBox">
                                      <img src={style16} alt="productImg" width={'100%'} height={'100%'}  style={{objectFit:'cover',position:'center'}}/>
                                    </div>
                                  </Slider>
                                  <Slider
                                    asNavFor={nav1}
                                    ref={slider => (sliderRef2 = slider)}
                                    slidesToShow={5}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                  >
                                    <div>
                                      <img src={style11} alt="productImg" style={{width:'85px',height:'100px',objectFit:'cover',position:'center'}} />
                                    </div>
                                    <div>
                                    <img src={style13} alt="productImg" style={{width:'85px',height:'100px',objectFit:'cover',position:'center'}} />
                                    </div>
                                    <div>
                                    <img src={style12} alt="productImg" style={{width:'85px',height:'100px',objectFit:'cover',position:'center'}} />
                                    </div>
                                    <div>
                                    <img src={style1} alt="productImg" style={{width:'85px',height:'100px',objectFit:'cover',position:'center'}} />
                                    </div>
                                    <div>
                                    <img src={style4} alt="productImg" style={{width:'85px',height:'100px',objectFit:'cover',position:'center'}} />
                                    </div>
                                    <div>
                                    <img src={style14} alt="productImg" style={{width:'85px',height:'100px',objectFit:'cover',position:'center'}} />
                                    </div>
                                    <div>
                                    <img src={style15} alt="productImg" style={{width:'85px',height:'100px',objectFit:'cover',position:'center'}} />
                                    </div>
                                    <div>
                                    <img src={style16} alt="productImg" style={{width:'85px',height:'100px',objectFit:'cover',position:'center'}} />
                                    </div>
                                  </Slider>
                                </div>
                              </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                          <div>
                            <div style={{paddingBottom:'20px'}} className="border-bottom">
                              <h2 style={{fontSize:'22px',margin:'0 0 15px 0'}}>Seeds Of Change Oraganic Quinoa, Brown</h2>
                              <p style={{fontSize:'14px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error
                              doloribus saepe natus?</p>
                            </div>
                            <div style={{paddingTop:'20px'}}>
                              <div className='star fs-5'>
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  <span style={{ fontSize: '18px', color: 'gray' }}>( 75 Review )</span>
                                </div>
                                <div>
                                  <ul className='mt-3'>
                                    <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                                      <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Brand :</label>
                                      
                                      ESTA BETTERU CO
                                    </li>
                                    
                                    <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                                      <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Flavour  :</label>
                                      
                                      Super Saver Pack
                                    </li>

                                    <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                                      <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Diet Type   :</label>
                                      
                                      Vegetarian
                                    </li>

                                    <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                                      <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Weight  :</label>
                                      
                                      200 Grams
                                    </li>
                                    
                                    <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                                      <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Speciality   :</label>
                                      
                                      Gluten Free, Sugar Free
                                    </li>

                                    <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                                      <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Info    :</label>
                                      
                                      Egg Free, Allergen-Free
                                    </li>

                                    <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                                      <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Items   :</label>
                                      
                                      1
                                    </li>
                                  </ul>
                                  <p className='price fw-bold fs-2 my-3'>
                                    $145<span className='fw-normal ps-2 fs-5'>$150</span>
                                  </p>
                                </div>
                                <div className='mt-3 d-flex align-items-center '>
                                  <h5 style={{fontSize:'16px'}}>
                                    <span>Size</span>
                                    /
                                    <span>Weight</span>
                                    :
                                  </h5>
                                  <div className='px-3'>
                                    <ul className='d-flex'>
                                      <li className='rounded' style={{margin:'2px',padding:'5px 10px',fontSize:'13px',color:'#777', border:'1px solid #e9e9e9',transition:'all 0.3s ease-in-out'}}>50kg</li>
                                      <li className='rounded' style={{margin:'2px',padding:'5px 10px',fontSize:'13px',color:'#777', border:'1px solid #e9e9e9',transition:'all 0.3s ease-in-out'}}>80kg</li>
                                      <li className='rounded' style={{margin:'2px',padding:'5px 10px',fontSize:'13px',color:'#777', border:'1px solid #e9e9e9',transition:'all 0.3s ease-in-out'}}>120kg</li>
                                      <li className='rounded' style={{margin:'2px',padding:'5px 10px',fontSize:'13px',color:'#777', border:'1px solid #e9e9e9',transition:'all 0.3s ease-in-out'}}>200kg</li>
                                    </ul>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </Col>
                    </Row>
                  </div>
                  <div style={{marginTop:'40px',padding:'24px',border:'1px solid #e9e9e9',borderRadius:'5px'}}>
                    <Tabs
                      defaultActiveKey="description"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                    >
                      <Tab eventKey="description" title="Description">
                        <div style={{paddingTop:'30px'}}>
                          <p style={{fontSize:'15px',textAlign:'left',fontWeight:'500'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                              sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit
                              dignissimos consectetur quae in perferendis
                              doloribusdebitis corporis, eaque dicta, repellat amet, illum adipisci vel
                              perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                              ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                              laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                        </div>
                        <h4 style={{paddingTop:'30px',paddingBottom:'20px',fontSize:'18px',color:"#2b2b2d",borderBottom:'1px solid #e9e9e9'}}>Packaging & Delivery</h4>
                        <p style={{fontSize:'15px',textAlign:'left',fontWeight:'500',paddingTop:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                        perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                        ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                        laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                      </Tab>
                      <Tab eventKey="information" title="Information">
                          <div style={{paddingTop:'30px'}}>
                            <p style={{fontSize:'15px',textAlign:'left',fontWeight:'500'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit
                                dignissimos consectetur quae in perferendis
                                doloribusdebitis corporis, eaque dicta, repellat amet, illum adipisci vel
                                perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                                ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                                laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                          </div>
                          <ul className='mt-3'>
                            <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                              <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Brand :</label>
                              
                              ESTA BETTERU CO
                            </li>
                            
                            <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                              <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Flavour  :</label>
                              
                              Super Saver Pack
                            </li>

                            <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                              <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Diet Type   :</label>
                              
                              Vegetarian
                            </li>

                            <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                              <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Weight  :</label>
                              
                              200 Grams
                            </li>
                            
                            <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                              <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Speciality   :</label>
                              
                              Gluten Free, Sugar Free
                            </li>

                            <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                              <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Info    :</label>
                              
                              Egg Free, Allergen-Free
                            </li>

                            <li style={{color:'#777',padding:'5px 0'}} className='d-flex'>
                              <label style={{marginRight:'10px',color:'#2b2b2d',fontWeight:'600',minInlineSize:'100px'}} className='d-fex justify-content-center'>Items   :</label>
                              
                              1
                            </li>
                          </ul>
                      </Tab>
                      <Tab eventKey="review" title="Review">
                         <div style={{paddingTop:"30px"}}>
                           <div style={{marginBottom:'30px'}}>
                              <div className='d-flex'>
                                <img src={review1} alt="review1" title='review1' style={{width:'50px',height:'50px',marginRight:'24px',borderRadius:'5px'}}/>
                                <div className='d-flex flex-column'>
                                  <span style={{marginBottom:'10px',fontSize:'13px',color:'#777'}}>Jan 08, 2024</span>
                                  <span style={{marginBottom:'10px',fontWeight:'500',fontSize:'17px'}}>Oreo Noman</span>
                                </div>
                                <div className='star fs-5' style={{marginLeft:"auto",marginBottom:'20px'}}>
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  {/* <IoIosStarOutline style={{ marginRight: '3px' }} /> */}
                                </div>

                              </div>
                              <p style={{paddingLeft:'74px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                              sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum
                              adipisci vel
                              perferendis dolor! quae vero in perferendis provident quis.</p>
                              <div className='d-flex' style={{marginTop:'30px'}}>
                                <img src={review2} alt="review2" title='review2' style={{width:'50px',height:'50px',marginRight:'24px',borderRadius:'5px'}}/>
                                <div className='d-flex flex-column'>
                                  <span style={{marginBottom:'10px',fontSize:'13px',color:'#777'}}>Mar 22, 2024</span>
                                  <span style={{marginBottom:'10px',fontWeight:'500',fontSize:'17px'}}>Lina Wilson</span>
                                </div>
                                <div className='star fs-5' style={{marginLeft:"auto",marginBottom:'20px'}}>
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  <IoIosStar style={{ marginRight: '3px' }} />
                                  {/* <IoIosStar style={{ marginRight: '3px' }} /> */}
                                  <IoIosStarOutline style={{ marginRight: '3px' }} />
                                </div>

                                </div>
                                <p style={{paddingLeft:'74px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum
                                adipisci vel
                                perferendis dolor! quae vero in perferendis provident quis.</p>
                           </div>
                           <h4 style={{paddingBottom:'10px'}}>Add a Review</h4>
                           <Form>
                             <div className='d-flex align-items-center'style={{marginBottom:'20px'}}>
                               <span style={{color:'#7a7a7a',marginRight:'10px'}}>Your rating :</span>
                                <div className='star fs-5'>
                                    <IoIosStar style={{ marginRight: '3px' }} />
                                    <IoIosStar style={{ marginRight: '3px' }} />
                                    <IoIosStar style={{ marginRight: '3px' }} />
                                    <IoIosStar style={{ marginRight: '3px' }} />
                                    {/* <IoIosStar style={{ marginRight: '3px' }} /> */}
                                    <IoIosStarOutline style={{ marginRight: '3px' }} />
                                  </div>
                             </div>
                             <div style={{marginBottom:'10px'}}>
                                <input type="text" placeholder='Name' name='YourName' style={{width:'100%',height:'50px',marginBottom:'15px',padding:'5px 20px',border:'1px solid #e9e9e9',color:'#777',fontSize:'15px',borderRadius:'5px'}}/>
                             </div>
                             <div style={{marginBottom:'10px'}}>
                                <input type="email" placeholder='Email' name='YourEmail' style={{width:'100%',height:'50px',marginBottom:'15px',padding:'5px 20px',border:'1px solid #e9e9e9',color:'#777',fontSize:'15px',borderRadius:'5px'}} required/>
                             </div>
                             <div>
                               <textarea name='yourCommit' placeholder='Enter Your Email' style={{width:'100%',height:'150px',marginBottom:'15px',padding:'20px',border:'1px solid #e9e9e9',color:'#777',fontSize:'15px',borderRadius:'5px'}}></textarea>
                               <button style={{transition:'all 0.3s ease-in-out',color:'#fff',backgroundColor:'#64b496',border:'1px solid #64b496',borderRadius:'5px',padding:'8px 22px',fontWeight:'bold'}} className='reviewButton'>Submit</button>
                             </div>
                           </Form>
                         </div>
                      </Tab>
                    </Tabs>
                  </div>
                </Col>
              </Row>
          </div>
       </div>
       <div>
         <Container>
            <div className='sub-title text-center' style={{ paddingTop: '90px' }}>
            <h2>PopularProducts</h2>
            <div className='sub-title-p'>
              <p className='py-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore lacus vel facilisis.
              </p>
            </div>
             </div>
             <div>
             <Row className='justify-content-center'>
            {/* Product Card 1 */}
              <Col xs={12} sm={6} md={4} lg={3} xl={2}  className='mb-4'>
                <Card className='p-3 position-relative'>
                  <div className='imgBox'>
                    <Card.Img
                      variant="top"
                      src={style1}
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
                        Best snacks with hazel nut pack 200gm
                      </a>
                      <p className='price fw-bold'>
                        $145<span className='fw-normal ps-2'>$150</span>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Product Card 2 */}
              <Col xs={12} sm={6} md={4} lg={3} xl={2}  className='mb-4'>
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
              
              {/* Product Card 3 */}
              <Col xs={12} sm={6} md={4} lg={3} xl={2}  className='mb-4'>
                <Card className='p-3 position-relative'>
                <div className='imgBox'>
                    <Card.Img
                      variant="top"
                      src={style5}
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
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStarOutline style={{ marginRight: '3px' }} />
                      <span style={{ fontSize: '13px', color: 'gray' }}>(4.5)</span>
                    </div>
                    <div>
                      <a href="javascript:void(0)" className='text fw-semibold my-3'>
                        Fresh organic apple 1kg Simla marming
                      </a>
                      <p className='price fw-bold'>
                        $120<span className='fw-normal ps-2'>$123.25</span>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Product Card 4 */}
              <Col xs={12} sm={6} md={4} lg={3} xl={2}  className='mb-4'>
                <Card className='p-3 position-relative'>
                <div className='imgBox'>
                    <Card.Img
                      variant="top"
                      src={style2}
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
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStarOutline style={{ marginRight: '3px' }} />
                      <span style={{ fontSize: '13px', color: 'gray' }}>(4.5)</span>
                    </div>
                    <div>
                      <a href="javascript:void(0)" className='text fw-semibold my-3'>
                        Fresh organic apple 1kg Simla marming
                      </a>
                      <p className='price fw-bold'>
                        $120<span className='fw-normal ps-2'>$123.25</span>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              
              {/* Product Card 5 */}
              <Col xs={12} sm={6} md={4} lg={3} xl={2}  className='mb-4'>
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
            </Row>
             </div>
         </Container>
       </div>
      </>
  )
}

export default ProductFull
