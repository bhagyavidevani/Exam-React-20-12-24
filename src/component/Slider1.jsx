import Slider from "react-slick";
import slider1 from '../assets/images/slider1.jpg'
import slider2 from '../assets/images/slider2.jpg'
import slider3 from '../assets/images/slider3.jpg'
import { Container } from "react-bootstrap";


function Slider1() {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <>
      <Container>
      <div className="slider1-container p-b-100 position-relative">
      <Slider {...settings} className="g-1">
        <div>
          <div className="px-2 position-relative">
            <img src={slider1} alt="slider1" width={'100%'} className="rounded"/>
            <div className="slider1-content">
               <h5>Fresh & healthy <br/> Organic Fruits</h5>
               <p><span>35%</span>
                  off on first order
               </p>
               <div>
                  <a href="javscript:void(0)">Shop now</a>
               </div>
            </div>
          </div>
        </div>
        <div >
          <div className="px-2 position-relative">
            <img src={slider2} alt="slider2" width={'100%'} className="rounded"/>
            <div className="slider1-content">
               <h5>Healthy  <br/>  Bakery Products</h5>
               <p><span>30%</span>
                  off on first order
               </p>
               <div>
                  <a href="javscript:void(0)">Shop now</a>
               </div>
            </div>
          </div>
        </div>
        <div>
          <div className="px-2 position-relative">
            <img src={slider3} alt="slider3"width={'100%'} className="rounded"/>
            <div className="slider1-content">
               <h5>Fresh <br/> Snacks & Sweets</h5>
               <p><span>20%</span>
                  off on first order
               </p>
               <div>
                  <a href="javscript:void(0)">Shop now</a>
               </div>
            </div>
          </div>
        </div>
        <div>
          <div className="px-2 position-relative">
            <img src={slider1} alt="slider1" width={'100%'} className="rounded"/>
            <div className="slider1-content">
               <h5>Fresh & healthy <br/> Organic Fruits</h5>
               <p><span>35%</span>
                  off on first order
               </p>
               <div>
                  <a href="javscript:void(0)">Shop now</a>
               </div>
            </div>
          </div>
        </div>
        <div>
          <div className="px-2 position-relative">
            <img src={slider2} alt="slider2" width={'100%'} className="rounded"/>
            <div className="slider1-content">
               <h5>Healthy  <br/>  Bakery Products</h5>
               <p><span>30%</span>
                  off on first order
               </p>
               <div>
                  <a href="javscript:void(0)">Shop now</a>
               </div>
            </div>
          </div>
        </div>
        <div>
          <div className="px-2 position-relative">
            <img src={slider3} alt="slider1" width={'100%'} className="rounded"/>
            <div className="slider1-content">
               <h5>Fresh <br/> Snacks & Sweets</h5>
               <p><span>20%</span>
                  off on first order
               </p>
               <div>
                  <a href="javscript:void(0)">Shop now</a>
               </div>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
      </Container>
    </>
  )
}

export default Slider1
