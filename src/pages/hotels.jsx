import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import h1 from "./image/h1.webp";
import h2 from "./image/h2.webp";
import h3 from "./image/h3.webp";
import h4 from "./image/h4.webp";
import h5 from "./image/h5.webp";
import h6 from "./image/h6.webp";
export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">Hotels</li>
    </ol>
    <h2>Find Your Dream Hotel</h2>
    <h4>hotels in reasonable price In bestest Quality </h4>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={h1} alt="" />
          <div className="card-header">Hotel Petite B&B</div>
          <div className="card-body">
            <h4 className="card-title">Hotel in Haderslev</h4>
            <p className="card-text">
              Situated in Haderslev and with Koldinghus Royal Castle - Ruin -
              Museum reachable within 32 km, Hotel Petite B&B features a garden,
              non-smoking rooms, free WiFi and a terrace.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={h2} alt="" />
          <div className="card-header">Hotel Møllehuset</div>
          <div className="card-body">
            <h4 className="card-title">Hotel in Hadsund</h4>
            <p className="card-text">
              Set in Hadsund, 40 km from Memphis Mansion, Hotel Møllehuset
              offers accommodation with a garden, free private parking, a shared
              lounge and a terrace.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={h3} alt="" />
          <div className="card-header">Hals Hotel</div>
          <div className="card-body">
            <h4 className="card-title">Hotel in Hals</h4>
            <p className="card-text">
              Situated in Hals, Hals Hotel has a shared lounge, garden, terrace,
              free private parking and free WiFi throughout the property. All
              rooms boast a TV with satellite channels and a private bathroom.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={h4} alt="" />
          <div className="card-header">Milling Hotel Søpark</div>
          <div className="card-body">
            <h4 className="card-title">
              Located between the lakes Nørresø and Søndersø
            </h4>
            <p className="card-text">
              this hotel is 400 metres from Maribo Train Station. Guests can
              relax on the terrace which offers views of the water and
              surrounding parkland.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={h5} alt="" />
          <div className="card-header">Peak 12 HotelOpens in new window</div>
          <div className="card-body">
            <h4 className="card-title">
              Peak12 Hotel is located in Denmark's old capital Viborg.
            </h4>
            <p className="card-text">
              Among other on-site facilities the hotel has an ambitious
              cocktailbar, a modern lounge-area with a coffee space and the
              city’s highest rooftop...{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={h6} alt="" />
          <div className="card-header">Hotel Cabinn Vejle</div>
          <div className="card-body">
            <h4 className="card-title">Situated in Nordby</h4>
            <p className="card-text">
              Stay by Stage features free WiFi, and guests can enjoy a terrace,
              a restaurant and a bar.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
