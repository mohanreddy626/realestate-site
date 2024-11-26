import React from "react";
import "../Stylescss/contact.css";
import Header from "./Header";
import Footer from "./footer/Footer";
import { Col, Container, Row, Card } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <Header />
      <div class="p-5 my-5 text-center ">
        <h1 class="fs-1">Contact Us</h1>
      </div>

      <Container fluid>
        <Row>
          <Col md={6} className="text-start">
            <h5>Corporate Office</h5>
            <ul>
              <li className="add-one">
               <i class="bi bi-map" />
              <p class='text-start'>
              Vishnu Nilayam, Door. No. 59A-15-33, Badraiah Nagar, Panta
              Kaalva Road, NTR Circle, Patamata, Vijayawada, A.P. - 520 010
              </p>
               
              </li>
              <li>
              <i class="bi bi-envelope" />
              <a href="mailto:sribhramaratownships@gmail.com">
                  sribhramaratownships@gmail.com
                </a>
                
              </li>
              <li>
              <i class="bi bi-telephone-fill">
              </i>
              <a href="tel:+918662433060">0866-24 33060</a>
               
              </li>
            
              <li>
              <i class="bi bi-clock">
              </i>
              Monday to Saturday: 9.00am to 8.00pm
                </li>
            </ul>
          </Col>
          <Col md={6} className="text-start">
            <h5>Head Office</h5>
            <ul>
              <li class='text-start'> 
              <i class="bi bi-map">
              </i>
              1st Floor, APSFC Bhavan, Industrial Park, Gorantla, MG Inner
              Ring Road, Guntur, A.P. - 522 034
              </li>
              <li>
              <i class="bi bi-envelope">
             
              </i>
              <a href="mailto:info@sribhramara.com">info@sribhramara.com</a>
              </li>
              <li>
              <i class="bi bi-telephone-fill">
                </i>
                <a href="tel:+918632353299">0863-23 53299</a>
              </li>
              
              <li>
              <i class="bi bi-clock">
              </i>
              Monday to Saturday: 9.00am to 8.00pm
                </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
