import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import hunza11 from "./hunzapakages/hunza11.jpg";
import hunza21 from "./hunzapakages/hunza21.jpg";
import hunza31 from "./hunzapakages/hunza31.jpg";
import hunza41 from "./hunzapakages/hunza41.jpg";
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
          <img src={hunza11} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            {/* href="https://www.pakistantravelguide.pk/package/2-days-thandiani-tour-package/"
              class="link-primary" */}
            6 Days, 5 NIghts Start From PKR151000
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/hunza-winter-tour/"
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
            <h4> package #1</h4>
            <hr className="my-4" />
            <p className="card-text">
              Hunza Winter Tour – A life time Experience
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={hunza21} alt="" />
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
            <h4> package #3</h4>
            <br />
            <hr className="my-4" />
            <p className="card-text">7 Days Luxury Hunza Road Trip</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={hunza31} alt="" />
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
            <h4> package #4</h4>
            <br />
            <hr className="my-4" />
            <p className="card-text">5 Days Hunza Tour Package</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={hunza41} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            6 Days, 5 NIghts Start From PKR125000
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/hunza-honeymoon-tour/"
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
            <h4> package #5</h4>
            <br />
            <hr className="my-4" />
            <p className="card-text">Hunza Honeymoon Tour</p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
