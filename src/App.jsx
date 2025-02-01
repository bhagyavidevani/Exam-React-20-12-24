import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import Products from './component/Products';
import ProductLeft from './component/ProductLeft';
import ProductRight from './component/ProductRight';
import Home from './pages/Home';
import Sidebarleft from './component/Sidebarleft';
import SidebarRight from './component/SidebarRight';
import { Route, Routes } from 'react-router';
import Header from './component/Header'
import Footer from './component/Footer';
import SidebarFull from './component/SidebarFull';
import ProductFull from './component/ProductFull';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Cart from './component/Cart';
import BlogLeft from './component/BlogLeft';
// import Category from './pages/Category';


function App() {
  

  return (
    <><Header/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/products' element={<Products/>}/> 
        <Route path='/Sidebarleft' element={<Sidebarleft/>}/>
        <Route path='/SidebarRight' element={<SidebarRight/>}/>
        <Route path='/SidebarFull' element={<SidebarFull/>}/>
        <Route path='/ProductLeft' element={<ProductLeft/>}/>
        <Route path='/ProductRight' element={<ProductRight/>}/>
        <Route path='/ProductFull' element={<ProductFull/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/BlogLeft' element={<BlogLeft/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
