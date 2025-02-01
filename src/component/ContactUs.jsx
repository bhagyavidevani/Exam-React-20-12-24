// import React from 'react'
import { Col, Container,Form,Row } from 'react-bootstrap'
import { RiPhoneLine } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";
import { RiGlobeLine } from "react-icons/ri";
import { RiMapPinFill } from "react-icons/ri";
import Header5 from './Header5';

function ContactUs() {
  return (
      <>
        <Header5/>
        <div style={{padding:"30px 0"}}>
           <Container>
              <div>
                <div className='sub-title text-center mb-5' style={{ paddingTop: '90px' }}>
                  <h2>Get in Touch</h2>
                  <div className='sub-title-p'>
                    <p className='py-3'>
                       Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.   
                    </p>
                  </div>
                </div>
                <Row>
                   <Col xs={12} sm={6} md={4}>
                     <div style={{padding:'24px',border:'1px solid #e9e9e9',borderRadius:'5px',textAlign:'center'}}>
                        <div style={{fontSize:'30px',color:'#64b496'}}><RiPhoneLine /></div>
                        <div>
                          <h4 style={{fontSize:'18px',fontWeight:'bold',color:'#2b2b2d',margin:'8px 0'}}>Contact</h4>
                          <p style={{fontSize:'14px',color:'#777',paddingBottom:'5px'}}><a href="javascript:void(0)"><RiPhoneLine />&nbsp;   (+91)-9876XXXXX</a></p>
                          <p style={{fontSize:'14px',color:'#777'}}><a href="javascript:void(0)"><RiPhoneLine />&nbsp;      (+91)-987654XXXX</a></p>
                        </div>
                     </div>
                   </Col>
                   <Col xs={12} sm={6} md={4}>
                     <div style={{padding:'24px',border:'1px solid #e9e9e9',borderRadius:'5px',textAlign:'center'}}>
                        <div style={{fontSize:'30px',color:'#64b496'}}><RiMailSendLine /></div>
                        <div>
                          <h4 style={{fontSize:'18px',fontWeight:'bold',color:'#2b2b2d',margin:'8px 0'}}>Mail & Website</h4>
                          <p style={{fontSize:'14px',color:'#777',paddingBottom:'5px'}}><a href="javascript:void(0)"><RiMailSendLine />&nbsp;   Mail & Website</a></p>
                          <p style={{fontSize:'14px',color:'#777'}}><a href="javascript:void(0)"><RiGlobeLine />&nbsp;www.yourdomain.com</a></p>
                        </div>
                     </div>
                   </Col>
                   <Col xs={12} sm={6} md={4}>
                     <div style={{padding:'24px',border:'1px solid #e9e9e9',borderRadius:'5px',textAlign:'center'}}>
                        <div style={{fontSize:'30px',color:'#64b496'}}><RiMapPinFill /></div>
                        <div>
                          <h4 style={{fontSize:'18px',fontWeight:'bold',color:'#2b2b2d',margin:'8px 0'}}>Address</h4>
                          <p style={{fontSize:'14px',color:'#777',paddingBottom:'5px'}}><a href="javascript:void(0)"><RiMapPinFill />&nbsp;      140 Ruami Moraes Filho,
                          987 - Salvador - MA, 40352, Brazil.</a></p>
                        </div>
                     </div>
                   </Col>
                </Row>
              </div>
              <div style={{paddingTop:'100px'}}>
                <Row>
                  <Col xs={12} lg={6}>
                    <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', borderRadius: '5px'}}>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117273.92877634452!2d-38.40080105110735!3d-12.971378876902876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160a3f459af003%3A0x8c3b76f376db5377!2sSalvador%2C%20BA%2C%20Brazil!5e0!3m2!1sen!2sus!4v1647370355231!5m2!1sen!2sus"
                        width="100%" 
                        height="100%" 
                        style={{border: 0, position: 'absolute', top: 0, left: 0}}
                        allowFullScreen="" 
                        loading="lazy"
                      ></iframe>
                    </div>
                  </Col>
                  <Col xs={12} lg={6} >
                    <Form>
                    <div style={{marginBottom:'5px'}}>
                                <input type="text" placeholder='Name' name='YourName' style={{width:'100%',height:'50px',marginBottom:'15px',padding:'3px 10px',border:'1px solid #e9e9e9',color:'#777',fontSize:'15px',borderRadius:'5px'}}/>
                             </div>
                             <div style={{marginBottom:'5px'}}>
                                <input type="email" placeholder='Email' name='YourEmail' style={{width:'100%',height:'50px',marginBottom:'15px',padding:'3px 10px',border:'1px solid #e9e9e9',color:'#777',fontSize:'15px',borderRadius:'5px'}} required/>
                             </div>
                             <div style={{marginBottom:'5px'}}>
                                <input type="number" placeholder='Number' name='Yournumber' style={{width:'100%',height:'50px',marginBottom:'15px',padding:'3px 10px',border:'1px solid #e9e9e9',color:'#777',fontSize:'15px',borderRadius:'5px'}} required/>
                             </div>
                             <div>
                               <textarea name='yourmessage' placeholder='Enter Your message' style={{width:'100%',height:'150px',marginBottom:'15px',padding:'20px',border:'1px solid #e9e9e9',color:'#777',fontSize:'15px',borderRadius:'5px'}}></textarea>
                               <button style={{transition:'all 0.3s ease-in-out',color:'#fff',backgroundColor:'#64b496',border:'1px solid #64b496',borderRadius:'5px',padding:'8px 22px',fontWeight:'bold'}} className='reviewButton'>Submit</button>
                             </div>
                    </Form>
                  </Col>
                </Row>
              </div>
           </Container>
        </div>
      </>
  )
}

export default ContactUs
