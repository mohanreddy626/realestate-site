import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'

export default function Footer1() {
  return (
    <div className=' text-white' style={{backgroundColor:'black'}}>
       <Container fluid className="contact-form p-5">
      <Row class='p-4 text-justify'>
        <Col md={4} lg={4} sm={12}>
        <h3 class='mb-5'>GET IN TOUCH</h3>
          <h4>Head Office</h4>
          <p>1st Floor, APSFC Bhavan, Industrial Park, Gorantla, MG Inner Ring Road, Guntur, A.P. – 522 034.</p>
          <p>Phone: 0863-23 53299</p>
          <p>Email: info@sribhramara.com</p>
        </Col>
        <Col md={4} lg={4} sm={12}>
        <div class='mt-5 pt-2'>
          <h4 class='mt-4'>Corporate Address</h4>
          <p>Vishnu Nilayam, Door. No. 59A-15-33, Badraiah Nagar, Panta Kaalva Road, NTR Circle, Patamata, Vijayawada, A.P. - 520 010.</p>
          <p>Phone: 0866-24 33060</p>
          <p>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </p></div>
        </Col>

        <Col md={4} lg={4} sm={12}>
          <Form >
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder='Name' required />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder='Email' required />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" name="phone" placeholder='Phone' required />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea"  name="message" placeholder='Message' required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>

   
    </div>
  );
}
