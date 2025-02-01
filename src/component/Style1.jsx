import { Container, Card, Row, Col } from 'react-bootstrap';
import style1 from '../assets/images/style1.jpg';
import style2 from '../assets/images/style2.jpg';
import style3 from '../assets/images/style3.jpg';
import style4 from '../assets/images/style4.jpg';
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { RiHeartLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";

export default function Style1() {
  return (
    <Container>
      <div className='sub-title text-center' style={{ paddingTop: '90px' }}>
        <h2>Style 1</h2>
        <div className='sub-title-p'>
          <p className='py-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore lacus vel facilisis.
          </p>
        </div>
      </div>
      <div className='style-component'>
        <Container>
          <Row className='justify-content-center'>
            {/* Product Card 1 */}
            <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
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
            <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
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

            {/* Product Card 3 */}
            <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
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

            {/* Product Card 4 */}
            <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
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
          </Row>
        </Container>
      </div>
    </Container>
  );
}
