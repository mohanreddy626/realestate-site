import React from 'react'
import image from '../images/Himage1 (1).jpg';
import "../Stylescss/header.css";

export default function Homerow1() {
  return (
    <div>
      <div class='container-fluid'>
        <div class='row home-rowone'>
            <div class='col-lg-6 col-md-12 col-sm py-5'>
                <img src={image} className='img-fluid'/>
            </div>
            <div class='col-lg-6 col-md-12 col-sm p-5 bhramara' >
                <div class='mb-5'>
                <h2 class='mb-4'>Sri Bhramara Townships</h2>
                <p class='text-justify'>
                Sri Bhramara Townships Private Limited is one of the most predominant real estate trendsetters in the state of Andhra Pradesh. We believe in providing ultra luxurious villas, highly feasible commercial and residential plots to every aspirant who desires to make a dream home.
                </p></div>
                <div>
                    <h2 class='mb-4'>Our Strength</h2>
                    <p>
                    Our core strength lies in accurate identification of locations that have guaranteed scope for development which helps us build immense trust among customers, resulting in repeated investors &amp; strong referrals.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
