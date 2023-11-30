import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import f1 from "./image/f1.jpg";
import f2 from "./image/f2.jpg";
import f3 from "./image/f3.jpg";
import f4 from "./image/f4.jpg";
import f5 from "./image/f5.jpg";

export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">Flights</li>
    </ol>
    <h2>Find Cheap Flights</h2>
    <h4>FLIGHTS in reasonable price In bestest Quality </h4>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={f1} alt="" />
          <div className="card-header">Saudi Arab</div>
          <div className="card-body">
            <h4 className="card-title">Quarantine free</h4>
            <p className="card-text">COVID test not required</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={f2} alt="" />
          <div className="card-header">America</div>
          <div className="card-body">
            <h4 className="card-title">Free Airbnb pass</h4>
            <p className="card-text">COVID test not required</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={f3} alt="" />
          <div className="card-header">Los angeles</div>
          <div className="card-body">
            <h4 className="card-title">80 HRS travel</h4>
            <p className="card-text">COVID test not required</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={f4} alt="" />
          <div className="card-header">Oman</div>
          <div className="card-body">
            <h4 className="card-title">discount on ticket</h4>
            <p className="card-text">free passes for hotels</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={f5} alt="" />
          <div className="card-header">United Kingdom</div>
          <div className="card-body">
            <h4 className="card-title">Free food in flight</h4>
            <p className="card-text">covid 19 test required </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
