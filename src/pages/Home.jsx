// import React from 'react'
import PopularProducts from '../component/PopularProducts';
import Slider from 'react-slick';
import banner1 from '../assets/images/banner1.jpg'
import banner2 from '../assets/images/banner2.jpg'
// import categories1 from '../assets/images/categories1.jpg'
import categories2 from '../assets/images/categories2.jpg'
import categories3 from '../assets/images/categories3.jpg'
import bgDeal from '../assets/images/bgDeal.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import Slider1 from '../component/Slider1';
import Slider2 from '../component/Slider2';
import Slider3 from '../component/Slider3';
import Review from '../component/Review';
import Style4 from '../component/Style4';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
  return (
    <>
     <div className='p-b-100 bannerSlider'>
     <div className="slider-container overflow-hidden" >
      <div>
        <Slider {...settings}>
          <div className='bannerImg-1 position-relative'>
            <img src={banner1} alt="banner1" title='banner1' width={'100%'}/>
            <div className="banner">
            <Row>
                <Container>
                  <div className='slider-text'>
                    <h5 className='mb-3 fw-bold'>
                      <span className='fw-bold'>100%</span>
                      Organic Fruits
                    </h5>
                    <h1 className='mb-3 fw-bold'>Explore fresh & juicy fruits</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                    <a href="javscript:void(0)" className='mt-5'>Shop Now</a>
                  </div>
                </Container>
            </Row>
            </div>
          </div>
          <div className='bannerImg-2 position-relative'>
          <img src={banner2} alt="banner2" title='banner2' width={'100%'}/>
          <div className="banner">
            <Row>
                <Container>
                  <div className='slider-text'>
                    <h5 className='mb-3 fw-bold'>
                      <span className='fw-bold'>100%</span>
                      Organic Vegetables
                    </h5>
                    <h1 className='mb-3 fw-bold'>The best way to stuff your wallet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                    <a href="javscript:void(0)" className='mt-5'>Shop Now</a>
                  </div>
                </Container>
            </Row>
            </div>
          </div>
        </Slider>
      </div>
    </div>
     </div>
     <div className='section-categories position-relative p-b-100'>
       <Container>
         <Row className='gap-1'>
           <Col>
              <ul>
                <li className='nav-link mb-2'>
                  <button className='w-100 d-flex flex-column justify-content-center align-items-center py-3 fw-normal border border-secondary-subtle rounded'>
                    <span className='fw-semibold fs-5'> Cake & Mlik</span>
                     (65 items)
                  </button>
                </li>
                <li className='nav-link mb-2'>
                  <button className='w-100 d-flex flex-column justify-content-center align-items-center py-3 fw-normal border border-secondary-subtle rounded'>
                    <span className='fw-semibold fs-5'> Fresh Meat</span>
                     (30 items)
                  </button>
                </li>
                <li className='nav-link mb-2'>
                  <button className='w-100 d-flex flex-column justify-content-center align-items-center py-3 fw-normal border border-secondary-subtle rounded'>
                    <span className='fw-semibold fs-5'>Vegetables</span>
                     (25 items)
                  </button>
                </li>
                <li className='nav-link mb-2'>
                  <button className='w-100 d-flex flex-column justify-content-center align-items-center py-3 fw-normal border border-secondary-subtle rounded'>
                    <span className='fw-semibold fs-5'>Apple & Mango</span>
                     (45 items)
                  </button>
                </li>
                <li className='nav-link mb-2'>
                  <button className='w-100 d-flex flex-column justify-content-center align-items-center py-3 fw-normal border border-secondary-subtle rounded'>
                    <span className='fw-semibold fs-5'>Strawberry</span>
                     (68 items)
                  </button>
                </li>
                <li className='nav-link mb-2'>
                  <button className='w-100 d-flex flex-column justify-content-center align-items-center py-3 fw-semibold border border-secondary-subtle rounded'>
                    <span className='fs-5'>View More</span>
                  </button>
                </li>
              </ul>
           </Col>
           <Col>
              <div className='categories position-relative overflow-hidden'>
                 <div className='categories-inner position-absolute w-100 text-white top-0 left-0 p-3 z-5 d-flex'>
                   <h4>50
                   </h4>
                   <span className='d-flex fs-3 flex-row'>
                      %
                    </span>
                      <small className='d-ps-5 fs-2 pt-3'>OFF</small>
                 </div>
                 <div className='categories-contain position-absolute w-100 z-5'>
                    <div className='d-flex justify-content-center align-items-center text-white fw-bold'>
                      <h5 className='fs-3'>Cake</h5>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                      <a href="javascript:void(0)" className=''>shop now</a>
                    </div>
                    
                 </div>
                 <div className='categoriesImg'>
                      <img src={categories2} alt="categories1" title='categories1' width={'432px'} className=''/>
                 </div>
              </div>
              
           </Col>
           <Col>
           <div className='categories position-relative overflow-hidden'>
                 <div className='categories-inner position-absolute w-100 text-white top-0 left-0 p-3 z-5 d-flex'>
                   <h4>40
                   </h4>
                   <span className='d-flex fs-3 flex-row'>
                      %
                    </span>
                      <small className='d-ps-5 fs-2 pt-3'>OFF</small>
                 </div>
                 <div className='categories-contain position-absolute w-100 z-5'>
                    <div className='d-flex justify-content-center align-items-center text-white fw-bold'>
                      <h5 className='fs-3'>Milk</h5>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                      <a href="javascript:void(0)" className=''>shop now</a>
                    </div>
                    
                 </div>
                 <div className='categoriesImg'>
                      <img src={categories3} alt="categories3" title='categories3' width={'432px'} className='rounded'/>
                 </div>
              </div>
           </Col>
         </Row>
       </Container>
     </div>
     <PopularProducts/>
     <Slider1/>
     <Slider2/>
      <div className='p-b-100'>
        <div className='position-relative dealRightside'>
           <img src={bgDeal} alt="bgDeal" width={'100%'} />
         <Container>
            <div className='sectionDeal'>
                <span className='fs-5 fw-semibold'><code>35%</code>OFF</span>
                <h4 className='fw-bold fs-2 my-2'>Great deal on organic food.</h4>
                <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                <div className="counterInner">
                    <div id="countdown">
                      <ul>
                        <li><span id="days"></span>Days</li>
                        <li><span id="hours"></span>Hrs</li>
                        <li><span id="minutes"></span>Min</li>
                        <li><span id="seconds"></span>Sec</li>
                      </ul>
                    </div>
                </div>
            </div>
         </Container>
        </div>
      </div>
      <Slider3/>
      <Review/>
      <Style4/>
    </>
  )
}
