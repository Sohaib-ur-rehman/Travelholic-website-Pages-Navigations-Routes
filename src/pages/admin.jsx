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
      <h1 className="display-3">Admin Portal </h1>
      <p className="lead"></p>
      <hr className="my-4" />
    </div>
    <h2>Dream Your Next Trip</h2>
    <h4>Weekend getaways from Lahore </h4>

    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <div className="card-header">Total Website visitors</div>
          <div className="card-body">
            <h4 className="card-title">22k</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <div className="card-header">Total feedbacks</div>
          <div className="card-body">
            <h4 className="card-title">65k</h4>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <div className="card-header">pending Requests</div>
          <div className="card-body">
            <h4 className="card-title">35</h4>
          </div>
        </div>
      </div>

      <a
        href="https://www.pakistantravelguide.pk/package/murree-naran-kaghan-tour-package-7-days-6-nights/"
        class="link-primary"
      >
        <button type="button" class="btn btn-primary">
          Manage pakages
        </button>
      </a>

      <a href="/feedbacks" class="link-primary">
        <button type="button" class="btn btn-primary">
          View Feedback
        </button>
      </a>

      <a href="/feedbacks" class="link-primary">
        <button type="button" class="btn btn-primary">
          Manage Pakages
        </button>
      </a>
      <br />
      <hr className="my-4" />
    </div>
  </Fragment>
);
