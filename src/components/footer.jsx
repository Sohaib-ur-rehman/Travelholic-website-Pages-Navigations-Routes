import React, { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default () => (
  <Fragment>
    <div class="footer2">
      <div id="sp-footer1" class="col-lg-6 ">
        <div class="sp-column ">
          <span class="sp-copyright">
            ©2022 Travelholic.PK All Rights Reserved. Designed By
            Sohaib-ur-Rehman , Bilal zakriya
          </span>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="sp-module-content">
        <h3 class="sp-module-title">Company</h3>
        <ul class="menu">
          <li class=" item-215">
            <a href="/aboutus">About Us</a>
          </li>
        </ul>
      </div>

      <div class="sp-module-content">
        <h3 class="sp-module-title">links</h3>
        <ul class="menu">
          <li class=" item-215">
            <a href="/contactus">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>
);
