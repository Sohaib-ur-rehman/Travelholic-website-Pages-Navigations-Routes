import React, { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import naran11 from "./naranpakages/naran11.jpg";
import naran21 from "./naranpakages/naran21.jpg";
import naran31 from "./naranpakages/naran31.jpg";

export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">Tour Pakages</li>
    </ol>
    <h2>Top 5 Pakistan Hotspots</h2>
    <h4>Pakages in reasonable price In bestest Quality </h4>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={naran11} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            6 Days, 5 NIghts Start From PKR151000
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/naran-kaghan-tour-with-arcadian-resorts/"
              class="link-primary"
            >
              <button type="button" class="btn btn-primary">
                Details
              </button>
            </a>
            <br />
            <br />
            <a href="/bookingform" class="link-primary">
              <button type="button" class="btn btn-success">
                Book
              </button>
            </a>
            <h4> package #7</h4>
            <hr className="my-4" />
            <p className="card-text">
              Hunza Winter Tour – A life time Experience
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={naran21} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            7 Days, 6 NIghts Start From PKRon Call
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/7-days-luxury-hunza-road-trip/"
              class="link-primary"
            >
              <button type="button" class="btn btn-primary">
                Details
              </button>
            </a>
            <br />
            <br />
            <a href="/bookingform" class="link-primary">
              <button type="button" class="btn btn-success">
                Book
              </button>
            </a>{" "}
            <h4> package #8</h4>
            <br />
            <hr className="my-4" />
            <p className="card-text">7 Days Luxury Hunza Road Trip</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={naran31} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            5 Days, 4 Nights Start From PKR55000 / Person
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/5-days-hunza-tour-package/"
              class="link-primary"
            >
              <button type="button" class="btn btn-primary">
                Details
              </button>
            </a>
            <br />
            <br />
            <a href="/bookingform" class="link-primary">
              <button type="button" class="btn btn-success">
                Book
              </button>
            </a>{" "}
            <h4> package #9</h4>
            <br />
            <hr className="my-4" />
            <p className="card-text">5 Days Hunza Tour Package</p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
