import React from 'react'
import Header from './Header'
import Footer from './footer/Footer'
import Description from "./Description";
import Homerow1 from "./Homerow1";
import Homerow2 from "./Homerow2";


export default function Home() {
  return (
    <div style={{overflow:'hidden'}}>
      <Header />
      <Description />

      <Homerow1 />

    <Homerow2 />
      <Footer />
    </div>
  )
}
