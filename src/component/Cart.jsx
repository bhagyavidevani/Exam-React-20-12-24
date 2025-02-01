// import React from 'react'
import { Button, Container, Table } from "react-bootstrap"
import Header5 from "./Header5";
import style3 from "../assets/images/style3.jpg"
import style6 from "../assets/images/style6.jpg"
import style18 from "../assets/images/style18.jpg"
import { IoTrashOutline } from "react-icons/io5";
import { Row,Col,Card} from 'react-bootstrap'
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
import style5 from '../assets/images/style5.jpg';
import style4 from '../assets/images/style4.jpg';

function Cart() {
  return (
    <>
      <Header5/>
      <div>
        <div style={{paddingTop:'40px'}}>
           <Container>
               <div>
                  <form>
                     <div>
                        <Table style={{width:'100%',border:'1px solid #e9e9e9'}}>
                           <thead>
                              <tr>
                                 <th style={{padding:'15px',color:'#444',fontSize:'15px',textAlign:'left',backgroundColor:'#e9e9e9'}}>Product</th>
                                 <th style={{padding:'15px',color:'#444',fontSize:'15px',textAlign:'left',backgroundColor:'#e9e9e9'}}>Price</th>
                                 <th style={{padding:'15px',color:'#444',fontSize:'15px',textAlign:'left',backgroundColor:'#e9e9e9'}}>Quantity</th>
                                 <th style={{padding:'15px',color:'#444',fontSize:'15px',textAlign:'left',backgroundColor:'#e9e9e9'}}>Total</th>
                                 <th style={{padding:'15px',color:'#444',fontSize:'15px',textAlign:'left',backgroundColor:'#e9e9e9'}}>Action</th>
                              </tr>
                           </thead>
                           <tbody style={{borderColor:'#808080'}}>
                             <tr style={{border:'1px solid #e9e9e9'}}>
                               <td style={{width:'40%',padding:'25px 14px',color:'#444',fontSize:'16px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                 <a href="javascript:void(0)" style={{color:'#444',fontWeight:'500',fontSize:'14px',}} className="d-flex align-items-center">
                                    <img src={style5} alt="style5" title="style5" style={{width:'60px',marginRight:'20px',border:'1px solid #e9e9e9',borderRadius:'5px'}}/>
                                    Organic Lemon
                                 </a>
                               </td>
                              <td style={{width:'15%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}
                               >
                                <div className="">
                                   <span>$56.00</span>
                                </div>
                               </td>
                               <td style={{width:'20%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                  <div style={{width:'80px',height:'30px',backgroundColor:'#fff',border:'1px solid #e9e9e9',borderRadius:'5px',justifyContent:'space-between'}} className="d-flex align-items-center position-relative">
                                     <button style={{width:'25px',height:'25px',marginTop:'0px',border:'none',display:'flex',justifyContent:'center',alignContent:'center',backgroundColor:'transparent'}}>+</button>

                                     <input type="number" style={{background:'transparent none repeat scroll 0 0',color:'#444',border:'medium none',float:'left',textAlign:'center',outline:'none',fontSize:'14px',fontWeight:'600',width:'30px'}} value="1"/>

                                     <button style={{width:'25px',height:'25px',marginTop:'0px',border:'none',display:'flex',justifyContent:'center',alignContent:'center',backgroundColor:'transparent'}}>-</button>
                                  </div>
                                  
                               </td>
                               <td style={{ width:'15%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}
                               >
                                <div className="">
                                   <span>$56.00</span>
                                </div>
                               </td>
                               <td style={{padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                 <a href="javascript:void(0)" style={{width:'90px'}}>
                                 <IoTrashOutline style={{fontSize:'22px'}}/>
                                 </a>
                               </td>
                             </tr>
                             <tr style={{border:'1px solid #e9e9e9'}}>
                               <td style={{width:'40%',padding:'25px 14px',color:'#444',fontSize:'16px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                 <a href="javascript:void(0)" style={{color:'#444',fontWeight:'500',fontSize:'14px',}} className="d-flex align-items-center">
                                    <img src={style2} alt="style5" title="style5" style={{width:'60px',marginRight:'20px',border:'1px solid #e9e9e9',borderRadius:'5px'}}/>
                                    Apple Juice
                                 </a>
                               </td>
                              <td style={{width:'15%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}
                               >
                                <div className="">
                                   <span>$75.00</span>
                                </div>
                               </td>
                               <td style={{width:'20%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                  <div style={{width:'80px',height:'30px',backgroundColor:'#fff',border:'1px solid #e9e9e9',borderRadius:'5px',justifyContent:'space-between'}} className="d-flex align-items-center position-relative">
                                     <button style={{width:'25px',height:'25px',marginTop:'0px',border:'none',display:'flex',justifyContent:'center',alignContent:'center',backgroundColor:'transparent'}}>+</button>

                                     <input type="number" style={{background:'transparent none repeat scroll 0 0',color:'#444',border:'medium none',float:'left',textAlign:'center',outline:'none',fontSize:'14px',fontWeight:'600',width:'30px'}} value="1"/>

                                     <button style={{width:'25px',height:'25px',marginTop:'0px',border:'none',display:'flex',justifyContent:'center',alignContent:'center',backgroundColor:'transparent'}}>-</button>
                                  </div>
                                  
                               </td>
                               <td style={{ width:'15%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}
                               >
                                <div className="">
                                   <span>$75.00</span>
                                </div>
                               </td>
                               <td style={{padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                 <a href="javascript:void(0)" style={{width:'90px'}}>
                                 <IoTrashOutline style={{fontSize:'22px'}}/>
                                 </a>
                               </td>
                             </tr>
                             <tr style={{border:'1px solid #e9e9e9'}}>
                               <td style={{width:'40%',padding:'25px 14px',color:'#444',fontSize:'16px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                 <a href="javascript:void(0)" style={{color:'#444',fontWeight:'500',fontSize:'14px',}} className="d-flex align-items-center">
                                    <img src={style3} alt="style5" title="style5" style={{width:'60px',marginRight:'20px',border:'1px solid #e9e9e9',borderRadius:'5px'}}/>
                                    Watermelon 5kg Pack
                                 </a>
                               </td>
                              <td style={{width:'15%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}
                               >
                                <div className="">
                                   <span>$48.00</span>
                                </div>
                               </td>
                               <td style={{width:'20%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                  <div style={{width:'80px',height:'30px',backgroundColor:'#fff',border:'1px solid #e9e9e9',borderRadius:'5px',justifyContent:'space-between'}} className="d-flex align-items-center position-relative">
                                     <button style={{width:'25px',height:'25px',marginTop:'0px',border:'none',display:'flex',justifyContent:'center',alignContent:'center',backgroundColor:'transparent'}}>+</button>

                                     <input type="number" style={{background:'transparent none repeat scroll 0 0',color:'#444',border:'medium none',float:'left',textAlign:'center',outline:'none',fontSize:'14px',fontWeight:'600',width:'30px'}} value="1"/>

                                     <button style={{width:'25px',height:'25px',marginTop:'0px',border:'none',display:'flex',justifyContent:'center',alignContent:'center',backgroundColor:'transparent'}}>-</button>
                                  </div>
                                  
                               </td>
                               <td style={{ width:'15%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}
                               >
                                <div className="">
                                   <span>$48.00</span>
                                </div>
                               </td>
                               <td style={{padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                 <a href="javascript:void(0)" style={{width:'90px'}}>
                                 <IoTrashOutline style={{fontSize:'22px'}}/>
                                 </a>
                               </td>
                             </tr>
                             <tr style={{border:'1px solid #e9e9e9'}}>
                               <td style={{width:'40%',padding:'25px 14px',color:'#444',fontSize:'16px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                 <a href="javascript:void(0)" style={{color:'#444',fontWeight:'500',fontSize:'14px',}} className="d-flex align-items-center">
                                    <img src={style6} alt="style5" title="style5" style={{width:'60px',marginRight:'20px',border:'1px solid #e9e9e9',borderRadius:'5px'}}/>
                                     Pomegranate 5 kg pack
                                 </a>
                               </td>
                              <td style={{width:'15%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}
                               >
                                <div className="">
                                   <span>$90.00</span>
                                </div>
                               </td>
                               <td style={{width:'20%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                  <div style={{width:'80px',height:'30px',backgroundColor:'#fff',border:'1px solid #e9e9e9',borderRadius:'5px',justifyContent:'space-between'}} className="d-flex align-items-center position-relative">
                                     <button style={{width:'25px',height:'25px',marginTop:'0px',border:'none',display:'flex',justifyContent:'center',alignContent:'center',backgroundColor:'transparent'}}>+</button>

                                     <input type="number" style={{background:'transparent none repeat scroll 0 0',color:'#444',border:'medium none',float:'left',textAlign:'center',outline:'none',fontSize:'14px',fontWeight:'600',width:'30px'}} value="1"/>

                                     <button style={{width:'25px',height:'25px',marginTop:'0px',border:'none',display:'flex',justifyContent:'center',alignContent:'center',backgroundColor:'transparent'}}>-</button>
                                  </div>
                                  
                               </td>
                               <td style={{ width:'15%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}
                               >
                                <div className="">
                                   <span>$90.00</span>
                                </div>
                               </td>
                               <td style={{padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                 <a href="javascript:void(0)" style={{width:'90px'}}>
                                 <IoTrashOutline style={{fontSize:'22px'}}/>
                                 </a>
                               </td>
                             </tr>
                             <tr style={{border:'1px solid #e9e9e9'}}>
                               <td style={{width:'40%',padding:'25px 14px',color:'#444',fontSize:'16px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                 <a href="javascript:void(0)" style={{color:'#444',fontWeight:'500',fontSize:'14px',}} className="d-flex align-items-center">
                                    <img src={style18} alt="style5" title="style5" style={{width:'60px',marginRight:'20px',border:'1px solid #e9e9e9',borderRadius:'5px'}}/>
                                     Organic Peach Fruits
                                 </a>
                               </td>
                              <td style={{width:'15%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}
                               >
                                <div className="">
                                   <span>$50.00</span>
                                </div>
                               </td>
                               <td style={{width:'20%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                  <div style={{width:'80px',height:'30px',backgroundColor:'#fff',border:'1px solid #e9e9e9',borderRadius:'5px',justifyContent:'space-between'}} className="d-flex align-items-center position-relative">
                                     <button style={{width:'25px',height:'25px',marginTop:'0px',border:'none',display:'flex',justifyContent:'center',alignContent:'center',backgroundColor:'transparent'}}>+</button>

                                     <input type="number" style={{background:'transparent none repeat scroll 0 0',color:'#444',border:'medium none',float:'left',textAlign:'center',outline:'none',fontSize:'14px',fontWeight:'600',width:'30px'}} value="1"/>

                                     <button style={{width:'25px',height:'25px',marginTop:'0px',border:'none',display:'flex',justifyContent:'center',alignContent:'center',backgroundColor:'transparent'}}>-</button>
                                  </div>
                                  
                               </td>
                               <td style={{ width:'15%',padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}
                               >
                                <div className="">
                                   <span>$50.00</span>
                                </div>
                               </td>
                               <td style={{padding:'40px 14px',color:'#555', fontWeight:'500',fontSize:'15px',textAlign:'left',backgroundColor:'#f7f7f8'}}>
                                 <a href="javascript:void(0)" style={{width:'90px'}}>
                                 <IoTrashOutline style={{fontSize:'22px'}}/>
                                 </a>
                               </td>
                             </tr>
                           </tbody>
                        </Table>
                     </div>
                     <div>
                        <div style={{padding:'10px 0 0',justifyContent:'space-between'}} className="d-flex CartBtn">
                           <a href="javascript:void(0)" style={{color:'#444',textDecoration:'underline'}}>Continue Shopping</a>
                           <a href="javascript:void(0)" className="py-2 px-3" style={{fontSize:'18px',fontWeight:"semibold"}}><Button>Check Out</Button></a>
                        </div>
                     </div>
                  </form>
               </div>
           </Container>
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
      </div>
    </>
  )
}

export default Cart
