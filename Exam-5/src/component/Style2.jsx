import { Container, Card, Row, Col } from 'react-bootstrap';
import style5 from '../assets/images/style5.jpg';
import style2 from '../assets/images/style2.jpg';
import style3 from '../assets/images/style3.jpg';
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { RiHeartLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";

export default function Style2() {
  return (
    <>
      <Container>
        <div className="sub-title text-center" style={{ paddingTop: '90px' }}>
          <h2>Style 2</h2>
          <div className='sub-title-p'>
            <p className='py-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore lacus vel facilisis.
            </p>
          </div>
        </div>
        <div className="style-component">
          <Row className="justify-content-between">
            {/* Card 1 */}
            <Col xs={12} sm={6} md={4}  className="mb-4">
              <Card style={{ width: '100%' }} className="p-3 position-relative">
                <div className='imgBox'>
                    <Card.Img
                      ariant="top"
                      src={style5}
                      className='position-relative rounded'
                      style={{ transition: 'transform 0.5s ease' }}
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
                  <div className="icon-2">
                    <a href="javascript:void(0)">
                      <RiShoppingBagLine className="z-2" />
                    </a>
                  </div>
                  <Card.Title className="mt-2 mb-3">
                    <a href="javascript:void(0)" className="text-black fw-bold">
                      Organic fresh lemon
                    </a>
                  </Card.Title>
                  <div>
                    <p className="text-secondary fw-semibold">
                      Lorem ipsum dolor adipisicing elit.
                    </p>
                    <div className="star fs-5 mb-3 mt-1">
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStar style={{ marginRight: '3px' }} />
                    </div>
                    <p className="price fw-bold">
                      $120.25<span className="fw-normal ps-2">$123.25</span>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card style={{ width: '100%' }} className="p-3 position-relative">
              <div className='imgBox'>
                    <Card.Img
                      ariant="top"
                      src={style2}
                      className='position-relative rounded'
                      style={{ transition: 'transform 0.5s ease' }}
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
                  <div className="icon-2">
                    <a href="javascript:void(0)">
                      <RiShoppingBagLine className="z-2" />
                    </a>
                  </div>
                  <Card.Title className="mt-2 mb-3">
                    <a href="javascript:void(0)" className="text-black fw-bold">
                      Organic fresh lemon
                    </a>
                  </Card.Title>
                  <div>
                    <p className="text-secondary fw-semibold">
                      Lorem ipsum dolor adipisicing elit.
                    </p>
                    <div className="star fs-5 mb-3 mt-1">
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStar style={{ marginRight: '3px' }} />
                    </div>
                    <p className="price fw-bold">
                      $120.25<span className="fw-normal ps-2">$123.25</span>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col xs={12} sm={6} md={4}  className="mb-4">
              <Card style={{ width: '100%' }} className="p-3 position-relative">
              <div className='imgBox'>
                    <Card.Img
                      ariant="top"
                      src={style3}
                      className='position-relative rounded'
                      style={{ transition: 'transform 0.5s ease' }}
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
                  <div className="icon-2">
                    <a href="javascript:void(0)">
                      <RiShoppingBagLine className="z-2" />
                    </a>
                  </div>
                  <Card.Title className="mt-2 mb-3">
                    <a href="javascript:void(0)" className="text-black fw-bold">
                      Organic fresh vanilla farm watermelon 5kg
                    </a>
                  </Card.Title>
                  <div>
                    <p className="text-secondary fw-semibold">
                      Lorem ipsum dolor adipisicing elit.
                    </p>
                    <div className="star fs-5 mb-3 mt-1">
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStar style={{ marginRight: '3px' }} />
                      <IoIosStar style={{ marginRight: '3px' }} />
                    </div>
                    <p className="price fw-bold">
                      $120.25<span className="fw-normal ps-2">$123.25</span>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
