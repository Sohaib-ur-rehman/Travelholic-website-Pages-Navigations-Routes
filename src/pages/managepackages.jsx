import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import murree from "./tourimages/murree1.jpg";
import hunza from "./tourimages/hunza1.jpg";
import naran from "./tourimages/naran1.jpg";
import skardu from "./tourimages/skardu1.jpg";
import swat from "./tourimages/swat1.jpg";

export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">Tour Pakages</li>
    </ol>
    <h2>Managing Packages</h2>
    <h4>Administrator Priviliges to delete , edit respective packages</h4>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={murree} alt="" />

          <div className="card-body">
            <NavLink to="/muree">Muree</NavLink>
            <p className="card-text">Choose your trips in Murree</p>
          </div>
          <a
            href="https://www.pakistantravelguide.pk/package/murree-naran-kaghan-tour-package-7-days-6-nights/"
            class="link-primary"
          >
            <button type="button" class="btn btn-primary">
              Delete
            </button>
          </a>

          <a href="/bookingform" class="link-primary">
            <button type="button" class="btn btn-success">
              Edit
            </button>
          </a>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={hunza} alt="" />
          <div className="card-body">
            <NavLink to="/hunza">Hunza</NavLink>
            <p className="card-text">Choose your trips in Gilgit</p>
          </div>

          <a
            href="https://www.pakistantravelguide.pk/package/murree-naran-kaghan-tour-package-7-days-6-nights/"
            class="link-primary"
          >
            <button type="button" class="btn btn-primary">
              Delete
            </button>
          </a>

          <a href="/bookingform" class="link-primary">
            <button type="button" class="btn btn-success">
              Edit
            </button>
          </a>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={naran} alt="" />
          <div className="card-body">
            <NavLink to="/naran">Naran</NavLink>
            <p className="card-text">Choose your trips in Gilgit</p>
          </div>
          <a
            href="https://www.pakistantravelguide.pk/package/murree-naran-kaghan-tour-package-7-days-6-nights/"
            class="link-primary"
          >
            <button type="button" class="btn btn-primary">
              Delete
            </button>
          </a>

          <a href="/bookingform" class="link-primary">
            <button type="button" class="btn btn-success">
              Edit
            </button>
          </a>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={skardu} alt="" />
          <div className="card-body">
            <NavLink to="/skardu">Skardu</NavLink>
            <p className="card-text">Choose your trips in Skardu</p>
          </div>
          <a
            href="https://www.pakistantravelguide.pk/package/murree-naran-kaghan-tour-package-7-days-6-nights/"
            class="link-primary"
          >
            <button type="button" class="btn btn-primary">
              Delete
            </button>
          </a>

          <a href="/bookingform" class="link-primary">
            <button type="button" class="btn btn-success">
              Edit
            </button>
          </a>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={swat} alt="" />
          <div className="card-body">
            <NavLink to="/swat">Swat</NavLink>
            <p className="card-text">Choose your trips in Gilgit</p>
          </div>
          <a
            href="https://www.pakistantravelguide.pk/package/murree-naran-kaghan-tour-package-7-days-6-nights/"
            class="link-primary"
          >
            <button type="button" class="btn btn-primary">
              Delete
            </button>
          </a>

          <a href="/bookingform" class="link-primary">
            <button type="button" class="btn btn-success">
              Edit
            </button>
          </a>
        </div>
      </div>
    </div>
  </Fragment>
);
