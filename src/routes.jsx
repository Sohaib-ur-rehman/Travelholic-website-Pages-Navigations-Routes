import React from "react";
import { Switch, Route } from "react-router";

import home from "./pages/home";
import hotels from "./pages/hotels";
import restaurant from "./pages/restaurant";
import pro from "./pages/profile";
import flight from "./pages/flights";
import aboutus from "./pages/aboutus";
import contactus from "./pages/contactus";
import tourpakages from "./pages/tourpakages";
import hunza from "./pages/hunza";
import bookingform from "./pages/bookingform";
import muree from "./pages/murree";
import naran from "./pages/naran";
import skardu from "./pages/skardu";
import swat from "./pages/swat";
import login from "./pages/login";
import signup from "./pages/signup";
import admin from "./pages/admin";
import adminlogin from "./pages/adminlogin";
import feedbacks from "./pages/feedbacks";
import managepackages from "./pages/managepackages";

const NotFound = () => (
  <div className="text-center">
    Oops, what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  <Switch>
    <Route path="/home" exact component={home} />
    <Route path="/" exact component={home} />
    <Route path="/flights" exact component={flight} />
    <Route path="/hotels" exact component={hotels} />
    <Route path="/profile" exact component={pro} />
    <Route path="/restaurant" exact component={restaurant} />
    <Route path="/aboutus" exact component={aboutus} />
    <Route path="/contactus" exact component={contactus} />
    <Route path="/tourpakages" exact component={tourpakages} />
    <Route path="/muree" exact component={muree} />
    <Route path="/bookingform" exact component={bookingform} />
    <Route path="/hunza" exact component={hunza} />
    <Route path="/naran" exact component={naran} />
    <Route path="/skardu" exact component={skardu} />
    <Route path="/swat" exact component={swat} />
    <Route path="/login" exact component={login} />
    <Route path="/signup" exact component={signup} />
    <Route path="/admin" exact component={admin} />
    <Route path="/adminlogin" exact component={adminlogin} />
    <Route path="/feedbacks" exact component={feedbacks} />
    <Route path="/managepackages" exact component={managepackages} />
    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
