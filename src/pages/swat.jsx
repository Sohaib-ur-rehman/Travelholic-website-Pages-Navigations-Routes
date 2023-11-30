import React, { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import swat11 from "./swatpakages/swat11.jpg";
import swat21 from "./swatpakages/swat21.jpg";
import swat31 from "./swatpakages/swat31.jpg";

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
          <img src={swat11} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            {/* href="https://www.pakistantravelguide.pk/package/2-days-thandiani-tour-package/"
              class="link-primary" */}
            5 Days, 4 NIghts Start From PKR
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/swat-nathiagali-tour-package/"
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
            <h4> package #13</h4>
            <hr className="my-4" />
            <p className="card-text">Swat Nathiagali Tour Package</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={swat21} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            7 Days, 6 NIghts Start From PKRon Call
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/swat-kashmir-tour-package/"
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
            <br /> <h4> package #14</h4>
            <hr className="my-4" />
            <p className="card-text">Swat Kashmir Tour Package</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={swat31} alt="" />
          <div className="card-body">
            <hr className="my-4" />
            3 Days, 2 Nights Start From PKR 13000/- Per Person
            <br />
            <a
              href="https://www.pakistantravelguide.pk/package/3-days-kalam-tour-package/"
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
            <h4> package #15</h4>
            <br />
            <hr className="my-4" />
            <p className="card-text">3 days Kalam Tour Package</p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
