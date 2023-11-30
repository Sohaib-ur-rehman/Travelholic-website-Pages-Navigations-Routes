import bilal from "./image/bilal.jpeg";
import profile from "./image/profile.jpg";
import React, { Fragment } from "react";
export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Home</li>
    </ol>

    <div className="header">
      <h1 className="display-3">Travelholic.PK</h1>
      <p className="lead">BEST SOLUTION FOR YOUR TRAVELS & TRIPS PROBLEMS...</p>
    </div>

    <div className="jumbotron">
      <h1 className="display-3">About us</h1>
      <p className="lead">Info</p>
      <hr className="my-4" />
      <p>Find Great deals for travel and tourism.....</p>
    </div>

    <h4>Contributors</h4>

    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={bilal} alt="" />
          <div className="card-header">Bilal Zakriya</div>
          <div className="card-body">
            <h5 className="card-title">l1f19bsee0014</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <img src={bilal} alt="" />
          <div className="card-header">fahad umer</div>
          <div className="card-body">
            <h5 className="card-title">pata nahi kahan hai</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <img src={profile} alt="" />
          <div className="card-header">Sohaib</div>
          <div className="card-body">
            <h4 className="card-title">l1f19bsse0171</h4>
          </div>
        </div>
      </div>
    </div>
    <p>
      I hope you like our website, We created this websitre for our web project,
      This is a static react front-end app. There is no back-end intebgrated to
      it till now
    </p>

    <h3>Why choose us?</h3>
    <p>
      Becaue we are experienced developers and we lnow what to do with the
      required work.
    </p>
  </Fragment>
);
