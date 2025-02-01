// import React from 'react'

import { Col, Container,Row } from "react-bootstrap"
import Header5 from "./Header5";
import style17 from "../assets/images/style17.jpg"
import Slider2 from "./Slider2";

function AboutUs() {
  // counter
  let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},50)

})
  return (
    <>
      <Header5/>
      <Container>
        <div style={{padding:'100px 0'}}>
          <Row>
            <Col lg={6}>
               <div>
                  <h4 style={{marginBottom:'16px',fontSize:'36px',fontWeight:'700'}}>About The Carrot</h4>
                  <div style={{paddingTop:'5px'}}>
                     <p style={{paddingBottom:'26px',fontSize:'15px',color:'#7a7a7a',fontWeight:'500',lineHeight:'1.75'}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                        necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                        rerum quod. Tempora magni autem a voluptatibus neque.
                     </p>
                     <p style={{paddingBottom:'26px',fontSize:'15px',color:'#7a7a7a',fontWeight:'500',lineHeight:'1.75'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
                        accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus suscipit
                        voluptatum eius perferendis amet!.
                     </p>
                     <p style={{fontSize:'15px',color:'#7a7a7a',fontWeight:'500',lineHeight:'1.75'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
                        architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus libero
                        nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt
                        sed blanditiis quod aspernatur! Iusto?
                     </p>
                     <div>
                     <div id="counter">
                          <div className="item me-4">
                            <h1 className="count" data-number="120" ></h1>
                            <h3 className="text fs-5">Vendors</h3>
                          </div>
                          <div className="item me-4">
                            <h1 className="count" data-number="410" ></h1>
                            <h3 className="text fs-5">Customers</h3>
                          </div>
                          <div className="item 
                          ">
                            <h1 className="count" data-number="34" ></h1>
                            <h3 className="text fs-5">Products</h3>
                          </div>

                          </div>
                     </div>
                  </div>
               </div>
            </Col>
            <Col lg={6}>
              <div>
                  <img src={style17} alt="style17" width={'100%'} style={{borderRadius:'5px'}}/>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Slider2/>
        </div>
      </Container>
    </>
  )
}

export default AboutUs
