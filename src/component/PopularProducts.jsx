import { HiOutlineArrowRight } from "react-icons/hi";
import productBanner from '../assets/images/productBanner.jpg';
import { Col, Container, Row, Card } from "react-bootstrap";
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
import { useState } from "react";

// Sample product data
const products = [
  { id: 1, category: 'Vegetable', name: 'Fresh organic villa farm lomon 500gm pack', price: 120.25, image: style5, rating: 4.5 },
  { id: 2, category: 'Snack', name: 'Best snacks with hazel nut pack 200gm', price: 145, image: style1, rating: 5.0 },
  { id: 3, category: 'Fruit', name: 'Fresh organic apple 1kg Simla marming', price: 120, image: style2, rating: 4.5 },
  { id: 4, category: 'Bakery', name: 'Delicious white baked fresh bread and toast', price: 20, image: style7, rating: 5.0 },
  { id: 5, category: 'Bakery', name: 'Sweet crunchy nut mix 250gm pack', price: 120.25, image: style11, rating: 5.0 },
  { id: 6, category: 'Fruit', name: 'Organic fresh vanilla farm watermelon 5kg', price: 50.30, image: style3, rating: 3.2 },
  { id: 7, category: 'Snack', name: 'Sweet crunchy nut mix 250gm', price: 120.25, image: style4, rating: 5.0 },
  { id: 8, category: 'Bakery', name: 'Delicious white baked fresh bread and toast', price: 20, image: style7, rating: 5.0 },
];

function PopularProducts() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <div className="p-b-100">
        <div className="sub-title text-center">
          <h2 className="fw-bold">Popular Products</h2>
          <div className="sub-title-p">
            <p className="pb-5 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore lacus vel facilisis.
            </p>
          </div>
        </div>
        <Container>
          <Row>
            <div className="productContent d-flex position-relative">
              <Col lg={4}>
                <div className="productTabs me-3">
                  <ul>
                    <li onClick={() => setSelectedCategory('All')}
                         style={{ color: selectedCategory === 'All' ? '#64b496' : 'black' }}>
                      All
                      <HiOutlineArrowRight />
                    </li>
                    <li onClick={() => setSelectedCategory('Snack')}
                         style={{ color: selectedCategory === 'Snack' ? '#64b496' : 'black' }}>
                      Snack
                      <HiOutlineArrowRight />
                    </li>
                    <li onClick={() => setSelectedCategory('Vegetable')}
                        style={{ color: selectedCategory === 'Vegetable' ? '#64b496' : 'black' }}>
                      Vegetable
                      <HiOutlineArrowRight />
                    </li>
                    <li onClick={() => setSelectedCategory('Fruit')}
                         style={{ color: selectedCategory === 'Fruit' ? '#64b496' : 'black' }}>
                      Fruit
                      <HiOutlineArrowRight />
                    </li>
                    <li onClick={() => setSelectedCategory('Bakery')}
                        style={{ color: selectedCategory === 'Bakery' ? '#64b496' : 'black' }}>
                      Bakery
                      <HiOutlineArrowRight />
                    </li>
                  </ul>
                  <div>
                    <img
                      src={productBanner}
                      alt="productBanner"
                      width={"100%"}
                      height={"633px"}
                      className="mt-4 rounded"
                    />
                  </div>
                </div>
              </Col>
              <Col lg={8}>
                <Row className="g-3">
                  {filteredProducts.map(product => (
                    <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <Card className="p-3 position-relative">
                        <div className="imgBox">
                          <Card.Img
                            variant="top"
                            src={product.image}
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
                            <a href="javascript:void(0)">{product.category}</a>
                          </Card.Title>
                          <div className="star fs-5">
                            {Array.from({ length: 5 }, (_, index) => (
                              index < Math.floor(product.rating) 
                                ? <IoIosStar key={index} style={{ marginRight: "3px" }} />
                                : <IoIosStarOutline key={index} style={{ marginRight: "3px" }} />
                            ))}
                            <span style={{ fontSize: "13px", color: "gray" }}>({product.rating})</span>
                          </div>
                          <div>
                            <a href="javascript:void(0)" className="text fw-semibold my-3">
                              {product.name}
                            </a>
                            <p className="price fw-bold">
                              ${product.price}
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PopularProducts;
