import { Navbar} from "react-bootstrap";
import logo from '../assets/images/logo.png';
import { RiSearchLine } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiPhoneLine } from "react-icons/ri";

export default function header() {
  
  return (
    <>
        <div className="mainHeader">
          <div className='mainLogo'>
              <Navbar className="border-bottom justify-content-between">
                <div className="logo">
                  <a href="javascript:void(0)">
                    <img src={logo} alt="logo" style={{ width: "120px" }} />
                  </a>
                </div>
                <div className="searchContent d-flex">
                  <input type="text" placeholder="Search For items.." style={{ padding: "10px" }} />
                  <select name="Category">
                    <option value="">All Category</option>
                    <option value="">Mens</option>
                    <option value="">Womens</option>
                    <option value="">Electronics</option>
                  </select>
                  <a href="#"><RiSearchLine /></a>
                </div>
                {/* Hide the nav-icons on medium and smaller screens (screen width <= 991px) */}
                <div className="nav-icon d-none d-lg-flex align-items-center justify-content-center">
                  <div className="nav-item">
                    <div className="account-hover d-flex align-items-center fw-semibold">
                      <RiUserLine style={{ fontSize: "22px", marginRight: '8px' }} />
                      <p className="m-0">Account</p>
                    </div>
                    <div className="dropdown-menu">
                      <a href="#/profile">Register</a>
                      <a href="#/orders">Checkout</a>
                      <a href="#/settings">Login</a>
                    </div>
                  </div>
                  <div className="nav-wish">
                    <a href="javascript:void(0)" className="d-flex align-items-center px-4 fw-semibold text-black">
                      <RiHeartLine style={{ fontSize: "22px", marginRight: '8px' }} />
                      <p className="m-0">Wishlist</p>
                    </a>
                  </div>
                  <div className="nav-cart">
                    <a href="javascript:void(0)" className="d-flex align-items-center px-4 fw-semibold text-black">
                      <RiShoppingCartLine style={{ fontSize: "22px", marginRight: '8px' }} />
                      <p className="m-0">Cart</p>
                    </a>
                  </div>
                </div>
              </Navbar>
            </div>

          <div className="mainNavbar">
                <Navbar className="justify-content-between w-100 align-items-center py-0">
                  <div className="toggale fs-4 border  rounded" style={{padding:'0 6px'}}>
                      <a href="javascript:void(0)" className="d-flex justify-content-between text-black">
                        <RiMenu2Fill />
                      </a>
                  </div>
                  <nav >
                    <ul className="d-flex justify-content-center m-0">
                      <li><a href="/" className="p-0 position-relative fw-semibold">Home</a></li>


                      <li className="ps-5">
                        <div className="nav-item">
                          <div className="category-hover d-flex align-items-center">
                            <a href="javascript:void(0)" className="position-relative fw-semibold p-0">Category<RiArrowDropDownLine /></a>
                          </div>
                          <div className="dropdown-menu-navbar">
                            <a href="/Sidebarleft">Shop Left Sidebar</a>
                            <a href="/SidebarRight">Shop Right Sidebar</a>
                            <a href="/SidebarFull">Full Width</a>
                          </div>
                        </div>
                      </li>
                      

                      <li  className="ps-5">
                        <div className="nav-item">
                            <div className="category-hover d-flex align-items-center">
                            <a href="javascript:void(0)" className="position-relative fw-semibold p-0">Products<RiArrowDropDownLine /></a>
                            </div>
                            <div className="dropdown-menu-navbar">
                              <a href="/ProductLeft">Products Left Sidebar</a>
                              <a href="/ProductRight">Products Right Sidebar</a>
                              <a href="/ProductFull">Products Full Width</a>
                            </div>
                          </div>
                      </li>


                      <li className="ps-5">
                        <div className="nav-item">
                              <div className="category-hover d-flex align-items-center">
                              <a href="javascript:void(0)" className="position-relative fw-semibold p-0">Pages<RiArrowDropDownLine /></a>
                              </div>
                              <div className="dropdown-menu-navbar">
                                <a href="/AboutUs">About Us</a>
                                <a href="/ContactUs">Contact Us</a>
                                <a href="/Cart">Cart</a>
                                <a href="#/settings">Checkout</a>
                                <a href="#/settings">Track Order</a>
                                <a href="#/settings">Wishlist</a>
                                <a href="#/settings">Faq</a>
                                <a href="#/settings">Login</a>
                                <a href="#/settings">Register</a>
                                <a href="#/settings">Policy</a>
                              </div>
                        </div>
                      </li>
                    


                      <li className="ps-5">
                      <div className="nav-item">
                            <div className="category-hover d-flex align-items-center">
                              <a href="javascript:void(0)" className="position-relative fw-semibold p-0">Blog<RiArrowDropDownLine /></a>
                            </div>
                            <div className="dropdown-menu-navbar">
                              <a href="/BlogLeft">Left Sidebar</a>
                              <a href="#/orders">Right Sidebar</a>
                              <a href="#/settings">Full Width</a>
                              <a href="#/profile">Detail Left Sidebar</a>
                              <a href="#/orders">Detail Right Sidebar</a>
                              <a href="#/settings">Detail Full Width</a>
                            </div>
                      </div>
                      </li>
                      

                      
                      <li className="ps-5">
                      <div className="nav-item">
                          <div className="category-hover d-flex align-items-center">
                          <a href="javascript:void(0)" className="position-relative fw-semibold p-0">Elements<RiArrowDropDownLine /></a>
                          </div>
                          <div className="dropdown-menu-navbar">
                            <a href="/products">Products</a>
                            <a href="#/orders">Typography</a>
                            <a href="#/settings">Buttons</a>
                          </div>
                        </div>
                      </li>
                      
                    </ul>
                  </nav>
                  <div className="phone">
                    <a href="javascript:void(0)">
                      <RiPhoneLine />
                      +123 (456) (7890)
                    </a>
                  </div>
                </Navbar>
          </div>
        </div>
    </>
  )
}
