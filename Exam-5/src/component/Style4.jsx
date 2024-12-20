import { Card, Container, Row, Col } from 'react-bootstrap';
import style8 from '../assets/images/style8.jpg';
import style9 from '../assets/images/style9.jpg';
import style10 from '../assets/images/style10.jpg';
import { RiArrowRightLine } from 'react-icons/ri';

export default function Style4() {
  return (
    <>
      <div className="sub-title text-center" style={{ paddingTop: '90px' }}>
        <h2>Latest News</h2>
        <div className="sub-title-p">
          <p className="pt-2 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore lacus vel facilisis.
          </p>
        </div>
      </div>

      <div>
        <Container>
          <Row>
            {/* First Card */}
            <Col lg={4} md={6} sm={12} className="mb-4">
              <Card style={{ width: '100%' }}>
                <div className="imgBox">
                  <Card.Img variant="top" src={style8} className="rounded" />
                </div>
                <Card.Body>
                  <Card.Title>
                    <a href="javascript:void(0)" className="fw-semibold">By Admin | Snacks</a>
                  </Card.Title>
                  <Card.Text className="fw-bold my-2">
                    Urna pretium elit mauris cursus at elit Vestibulum.
                  </Card.Text>
                  <div className="style4-read">
                    <a href="javascript:void(0)">
                      Read More <RiArrowRightLine />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Second Card */}
            <Col lg={4} md={6} sm={12} className="mb-4">
              <Card style={{ width: '100%' }}>
                <div className="imgBox">
                  <Card.Img variant="top" src={style9} className="rounded" />
                </div>
                <Card.Body>
                  <Card.Title>
                    <a href="javascript:void(0)" className="fw-semibold">By Admin | Food</a>
                  </Card.Title>
                  <Card.Text className="fw-bold my-2">
                    Best guide to Shopping for organic ingredients.
                  </Card.Text>
                  <div className="style4-read">
                    <a href="javascript:void(0)">
                      Read More <RiArrowRightLine />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Third Card */}
            <Col lg={4} md={6} sm={12} className="mb-4">
              <Card style={{ width: '100%' }}>
                <div className="imgBox">
                  <Card.Img variant="top" src={style10} className="rounded" />
                </div>
                <Card.Body>
                  <Card.Title>
                    <a href="javascript:void(0)" className="fw-semibold">By Admin | Snacks</a>
                  </Card.Title>
                  <Card.Text className="fw-bold my-2">
                    Cursus at elit vestibulum urna pretium elit mauris.
                  </Card.Text>
                  <div className="style4-read">
                    <a href="javascript:void(0)">
                      Read More <RiArrowRightLine />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
