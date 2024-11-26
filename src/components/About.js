import React from "react";
import imageA from "../images/aboutimg.jpg";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./footer/Footer";
import "../Stylescss/about.css";
import About2 from "./About2";

export default function About() {
  return (
    <div>
      <Header />

      <Container class='mt'>
        <Row >
          <Col md={4} lg={4} sm={12}>
            <Image src={imageA} alt="" fluid className="image mt-5 pt-3" />
          </Col>

          <Col md={8} lg={8}>
          <div className="text-div p-4">
            <h4 class='fs-3 text-start'>
              Through stable and substantial investments, our goal is to provide
              a modern lifestyle and financial freedom.
            </h4>
            <p class='text-start'>
              Sri Bhramara is rapidly advancing in the realestate & construction
              industry with contemporary trends, taking into account every
              necessary aspect and facility to offer a comfortable lifestyle to
              the present generation, which is progressing at a fast pace, in
              every field, including commercial and industrial sectors.
            </p>
            <p class='text-start'>
              Sri Bhramara, now at the forefront of real estate, is dedicated to
              creating exceptional gated communities at affordable prices,
              ensuring financial security and unparalleled living standards for
              every family that invests with us.
            </p>
           <h4 class='text-start'>Galla Ramachandra Rao
           </h4>
           <p class='text-start'>
           Chairman and Managing Director
           </p></div>
          </Col>
        </Row>
      </Container>

      <About2 />

      <Footer />
    </div>
  );
}
