import bad from "./image/badshahi.jpg";

import shahi from "./image/shahi.jpg";
import shogran from "./image/shogran.jpg";
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
      <h1 className="display-3">Find your next stay</h1>
      <p className="lead">
        Search deals on hotels, restaurants, and much more...
      </p>
      <hr className="my-4" />
      <p>Find Great deals for travel and tourism.....</p>
    </div>
    <h2>Dream Your Next Trip</h2>
    <h4>Weekend getaways from Lahore </h4>

    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={bad} alt="" />
          <div className="card-header">Badshahi Mosque</div>
          <div className="card-body">
            <h4 className="card-title">Lahore</h4>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <img src={shahi} alt="" />
          <div className="card-header">Shahi Mahal</div>
          <div className="card-body">
            <h4 className="card-title">pata nahi kahan hai</h4>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <img src={shogran} alt="" />
          <div className="card-header">Shogran</div>
          <div className="card-body">
            <h4 className="card-title">balakot</h4>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
