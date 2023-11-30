import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import murree11 from "./murreepakages/murree11.jpg";
import murree21 from "./murreepakages/murree21.jpg";
import murree31 from "./murreepakages/murree31.jpg";

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
          <img src={murree11} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            {/* href="https://www.pakistantravelguide.pk/package/2-days-thandiani-tour-package/"
              class="link-primary" */}
            2 Days, 1 NIght Start From PKROn Call
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/murree-naran-kaghan-tour-package-7-days-6-nights/"
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
            <h4> package #1</h4>
            <hr className="my-4" />
            <p className="card-text">2 Days Thandiani Tour Package</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={murree21} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            7 Days, 6 Nights Start From PKR115000
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/murree-naran-kaghan-tour-package-7-days-6-nights/"
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
            <h4> package #2</h4>
            <br />
            <hr className="my-4" />
            <p className="card-text">
              Murree Naran Kaghan Tour Package 7 days 6 Nights
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={murree31} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            2 Days, 1 NIghts Start From PKR19000
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/1-day-trip-to-murree/"
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
            <h4> package #3</h4>
            <br />
            <hr className="my-4" />
            <p className="card-text">1 day trip to Murree</p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
