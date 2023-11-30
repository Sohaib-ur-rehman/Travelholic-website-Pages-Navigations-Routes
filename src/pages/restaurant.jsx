import React, { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import r1 from "./image/r1.jpg";
import r2 from "./image/r2.jpg";
import r3 from "./image/r3.jpg";
import r4 from "./image/r4.jpg";
import r5 from "./image/r5.jpg";
import r6 from "./image/r6.jpg";
export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">Restaurants</li>
    </ol>
    <h2>Best Restaurants Near You</h2>
    <h4>Restaurants in reasonable price In bestest Quality </h4>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={r1} alt="" />
          <div className="card-header">Monal Lahore</div>
          <div className="card-body">
            <h4 className="card-title">Barbecue, Asian</h4>
            <p className="card-text">
              “Sunday brunch” “Memories of my Son's birthday”
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={r2} alt="" />
          <div className="card-header">Andaaz Restaurant</div>
          <div className="card-body">
            <h4 className="card-title">Pakistani</h4>
            <p className="card-text">
              “Dinner” “Delightful and memorable meal”
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={r3} alt="" />
          <div className="card-header">Qabail Tribes</div>
          <div className="card-body">
            <h4 className="card-title">Barbecue, Asian</h4>
            <p className="card-text">“Lamb @ Qabail” “Amazing ribs”</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={r4} alt="" />
          <div className="card-header">Haveli Restaurant</div>
          <div className="card-body">
            <h4 className="card-title">Barbecue, Pakistani</h4>
            <p className="card-text">
              “Last meal before travel back to uk” “Good Indian Food”
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={r5} alt="" />
          <div className="card-header">Cooco's Den</div>
          <div className="card-body">
            <h4 className="card-title">Barbecue, Asian</h4>
            <p className="card-text">
              “Atmospheric restaurant next to Red Mosque” “Good but expensive”
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={r6} alt="" />
          <div className="card-header">Salt'n Pepper</div>
          <div className="card-body">
            <h4 className="card-title">Asian, Pakistani</h4>
            <p className="card-text">
              “Nice Dinner Spot” “Good food and quick service”
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
