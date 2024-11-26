import React from "react";
import image1 from "../images/R2img1.jpg";
import image2 from "../images/R2img2.jpg";
import image3 from "../images/R2img3.jpg";

export default function Homerow2() {
  return (
    <div>
      <div className="container mt-5 py-5">
        <div class="card-group row">
          <div class="card col-md card-hr2">
            <img src={image1} class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Residential Developments</h5>
              <p class="card-text">
                We aim at improving the lifestyle of people and give them
                quality living at affordable prices. Residences by Sri Bhramara
                are unique, conceptualized and modern.
              </p>
            </div>
          </div>
          <div class="card col-md-12 card-hr2">
            <img src={image2} class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Commercial Presence</h5>
              <p class="card-text">
                The success of the commercial places depends mainly on its
                location. We search for such strategic locations and build them
                into businesses for our customers.
              </p>
            </div>
          </div>
          <div class="card col-md-12 card-hr2">
            <img src={image3} class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Open Plots</h5>
              <p class="card-text">
                Open plots are like open opportunities. They are like a blank
                canvas where you can design your dream home as per your wish. We
                help our clients in getting the best plot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
