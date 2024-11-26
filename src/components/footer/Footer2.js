import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import imagef from '../../images/footer-img.jpg';
import "../../Stylescss/footer.css";

export default function Footer2() {
  
  return (
    <div style={{backgroundColor:'black'}}>
       <Container className="p-0">
      <Row>
        <Col lg={4} md={6} className=" text-white p-5">
          <div className="d-flex align-items-center">
            <Image src={imagef} alt="Sri Bhramara Logo" fluid className='image'/>
            
          </div>
        </Col>
         <Col lg={4} className='text-white p-5'>
         <h5>About us</h5>
         <p className="lead" style={{textAlign:'left'}}>
            Transforming dreams of many into reality, Sri Bhramara Townships Private Limited is one of the predominant real estate trendsetters in the state of Andhra Pradesh. We believe in constructing affordable homes at prominent locations.
          </p>
         </Col>

        <Col md={6} lg={4} className=" text-white p-5">
          <h2 className="mb-4">COMPANY INFO</h2>
          <ul className="list-unstyled">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/projects">Ongoing Projects</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
          <div className="text-muted mt-4">
            © 2024 - Sri Bhramara Townships Private Limited
          </div>
          <div>
            Developed by GREEN FMC ADVERTISING
          </div>
        </Col>
      </Row>
    </Container>

    </div>
  )
}
