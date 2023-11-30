import React, { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import skardu1 from "./skardupakages/skardu1.jpg";
import skardu21 from "./skardupakages/skardu21.jpg";
import skardu31 from "./skardupakages/skardu31.jpg";

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
          <img src={skardu1} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            {/* href="https://www.pakistantravelguide.pk/package/2-days-thandiani-tour-package/"
              class="link-primary" */}
            10 Days, 9 NIghts Start From PKR 11000
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/fairymeadows-skardu-tour/"
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
            <h4> package #10</h4>
            <hr className="my-4" />
            <p className="card-text">FairyMeadows Skardu Tour</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={skardu21} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            7 Days, 6 NIghts Start From PKR 12000
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/skardu-luxury-road-trip/"
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
            <h4> package #11</h4>
            <br />
            <hr className="my-4" />
            <p className="card-text">7 days Skardu Luxury Road Trip</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={skardu31} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            5 Days, 4 Nights Start From PKR140,000
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/5-days-trip-to-skardu-by-air/"
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
            <h4> package #12</h4>
            <br />
            <hr className="my-4" />
            <p className="card-text">5 Days Trip to Skardu by Air</p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
