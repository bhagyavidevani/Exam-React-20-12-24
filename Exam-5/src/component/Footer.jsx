import { Container } from "react-bootstrap";
import logo from '../assets/images/logo.png';
import footer1 from '../assets/images/footer1.jpg'
import footer2 from '../assets/images/footer2.jpg'
import footer3 from '../assets/images/footer3.jpg'
import footer4 from '../assets/images/footer4.jpg'
import footer6 from '../assets/images/footer6.jpg'
import { RiUserLocationLine, RiMailSendLine, RiPhoneLine, RiSendPlaneLine, RiFacebookLine, RiTwitterXLine, RiDribbbleLine, RiInstagramLine } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <footer className="position-relative">
        <Container>
          <div>
            <div className="footerMain position-relative d-flex">
              <div className="w-100 pe-5">
                <div className="footerLogo">
                  <a href="javascript:void(0)">
                    <img src={logo} alt="logo" style={{ width: "120px" }} />
                  </a>
                  <div>
                    <p className="fw-semibold">Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                  </div>
                </div>
                <div className="footerLinks">
                  <ul className="p-0">
                    <li className="locationLink d-flex">
                      <div className="iconLink">
                        <RiUserLocationLine className="fs-5" />
                      </div>
                      <p className="ps-4 fw-semibold">51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</p>
                    </li>
                    <li className="emailLink d-flex">
                      <div className="iconLink">
                        <RiMailSendLine className="fs-5" />
                      </div>
                      <a href="javascript:void(0)" className="ps-4 fw-semibold">example@email.com</a>
                    </li>
                    <li className="PhoneLink d-flex">
                      <div className="iconLink">
                        <RiPhoneLine className="fs-5" />
                      </div>
                      <a href="javascript:void(0)" className="ps-4 fw-semibold"> +91 123 4567890</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <h5 className="fw-bold">Company</h5>
                <div className="footerLinks">
                  <ul className="p-0">
                    <li className="pt-3">
                      <a href="javascript:void(0)">About Us</a>
                    </li>
                    <li className="pt-3">
                      <a href="javascript:void(0)">Delivery Information</a>
                    </li>
                    <li className="pt-3">
                      <a href="javascript:void(0)">Privacy Policy</a>
                    </li>
                    <li className="pt-3">
                      <a href="javascript:void(0)">Terms & Conditions</a>
                    </li>
                    <li className="pt-3">
                      <a href="javascript:void(0)">Contact Us</a>
                    </li>
                    <li className="pt-3">
                      <a href="javascript:void(0)">Support Center</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-100">
                <h5 className="fw-bold">Category</h5>
                <div className="footerLinks">
                  <ul className="p-0">
                    <li className="pt-3">
                      <a href="javascript:void(0)">Dairy & Bakery</a>
                    </li>
                    <li className="pt-3">
                      <a href="javascript:void(0)">Fruits & Vegetable</a>
                    </li>
                    <li className="pt-3">
                      <a href="javascript:void(0)">Snack & Spice</a>
                    </li>
                    <li className="pt-3">
                      <a href="javascript:void(0)">Juice & Drinks</a>
                    </li>
                    <li className="pt-3">
                      <a href="javascript:void(0)">Chicken & Meat</a>
                    </li>
                    <li className="pt-3">
                      <a href="javascript:void(0)">Fast Food</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-100">
                <h5 className="fw-bold mb-3">Subscribe Our Newsletter</h5>
                <div>
                  <form className="position-relative">
                    <input className="searchInput" type="text" placeholder="Search here..." />
                    <a href="javascript:void(0)" className="formicon">
                      <RiSendPlaneLine />
                    </a>
                  </form>
                </div>
                <div className="socialMedia d-flex">
                  <div>
                    <a href="javascipt:void(0)">
                      <RiFacebookLine />
                    </a>
                  </div>
                  <div className="px-2">
                    <a href="javascipt:void(0)">
                      <RiTwitterXLine />
                    </a>
                  </div>
                  <div>
                    <a href="javascipt:void(0)">
                      <RiDribbbleLine />
                    </a>
                  </div>
                  <div className="px-2">
                    <a href="javascipt:void(0)">
                      <RiInstagramLine />
                    </a>
                  </div>
                </div>
                <div className="d-flex">
                  <div style={{ marginRight: '5px', position: 'relative' }}>
                    <a href="javascript:void(0)">
                      <div className="image-overlay">
                        <img src={footer1} alt="footer1" width={"80px"} style={{ borderRadius: "5px" }} />
                        <div className="overlay">
                          <RiInstagramLine className="insta-icon" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div style={{ marginRight: '5px', position: 'relative' }}>
                    <a href="javascript:void(0)">
                      <div className="image-overlay">
                        <img src={footer2} alt="footer2" width={"80px"} style={{ borderRadius: "5px" }} />
                        <div className="overlay">
                          <RiInstagramLine className="insta-icon" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div style={{ marginRight: '5px', position: 'relative' }}>
                    <a href="javascript:void(0)">
                      <div className="image-overlay">
                        <img src={footer3} alt="footer3" width={"80px"} style={{ borderRadius: "5px" }} />
                        <div className="overlay">
                          <RiInstagramLine className="insta-icon" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div style={{ marginRight: '5px', position: 'relative' }}>
                    <a href="javascript:void(0)">
                      <div className="image-overlay">
                        <img src={footer4} alt="footer4" width={"80px"} style={{ borderRadius: "5px" }} />
                        <div className="overlay">
                          <RiInstagramLine className="insta-icon" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div style={{ marginRight: '5px', position: 'relative' }}>
                    <a href="javascript:void(0)">
                      <div className="image-overlay">
                        <img src={footer6} alt="footer5" width={"80px"} style={{ borderRadius: "5px" }} />
                        <div className="overlay">
                          <RiInstagramLine className="insta-icon" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lastFooter">
              <div className="text-center fw-semibold">
                <p>© 2024 <a href="javascript:void(0)">Carrot</a>, All rights reserved.</p>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

