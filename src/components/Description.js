import React from "react";
import "../Stylescss/header.css";

export default function Description() {
  return (
    <div>
      <div className="container ">
        <div class="row mt-5 ">
          <div class="col-lg-4 pt-5">
            <div className="header">WHO WE ARE</div>
            <div className="main-text">
              Building residential and commercial dreams since 2015
            </div>
          </div>
          <div className="numbers-container col-lg-4 pt-4 ms-5">
            <div className="number-item">
              <div className="number p-0">23</div>
              <p className="label p-0">Completed Projects</p>
            </div>
            <div className="number-item">
              <div className="number">12</div>
              <div className="label">Ongoing Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
