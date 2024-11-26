import React from "react";
import { Container,Row,Col,Image,Card } from "react-bootstrap";
import "../Stylescss/about.css";
import image1 from '../images/arrow2.png'
import image2 from '../images/arrow1.png'

export default function About2() {
  return (
    <div className="abt2 py-5">
      <div class='my-5 py-5'>
      <Container fluid>
      <Row className='gy-4 '>
        <Col md={12} lg={6} sm={12} >
          <Card className="bg-light text-dark cards mb-4 align-items-center py-4 pb-2">
            <Card.Body className=" d-flex  p-5" >  
             <i class="fi fi-ss-bullseye-pointer me-3"></i>
              <div class='text-start m-3'>
                 <Card.Title className="mb-4">Our Vision</Card.Title>
              <Card.Text >
              We envision making dream homes filled with love and luxury for everyone. Our vision is to make the metro-city like lives and facilities available at smaller towns at an affordable price.
              </Card.Text></div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} sm={12}>
          <Card className=" text-white cards  mission py-4 align-items-center pb-2">
            <Card.Body class=' d-flex p-5'>
            <i class="fi fi-ss-bullseye-pointer me-3"></i>
            <div class='text-start m-3'>
              <Card.Title  className="mb-4">Our Mission</Card.Title>
              <Card.Text>
              By identifying the right location and opportunity, we aim at providing the most affordable homes, luxurious villas and commercial locations to the people of Andhra Pradesh.
              </Card.Text></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> 
    </div>
    </div>
  );
}
