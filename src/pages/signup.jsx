import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">SignUp</li>
    </ol>
    <div className="header">
      <h1 className="display-3">Registration</h1>
      <p className="lead">Signup to get started</p>
    </div>

    <div class="col">
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="form-outline">
            <input
              type="text"
              id="form3Example1m"
              class="form-control form-control-lg"
            />
            <label class="form-label" for="form3Example1m">
              First name
            </label>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="form-outline">
            <input
              type="text"
              id="form3Example1n"
              class="form-control form-control-lg"
            />
            <label class="form-label" for="form3Example1n">
              Last name
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="form-outline">
            <input
              type="text"
              id="form3Example1n1"
              class="form-control form-control-lg"
            />
            <label class="form-label" for="form3Example1n1">
              Father's name
            </label>
          </div>
        </div>
      </div>

      <div class="form-outline mb-4">
        <input
          type="text"
          id="form3Example8"
          class="form-control form-control-lg"
        />
        <label class="form-label" for="form3Example8">
          Address
        </label>
      </div>

      <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
        <h6 class="mb-0 me-4">Gender: </h6>

        <div class="form-check form-check-inline mb-0 me-4">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="femaleGender"
            value="option1"
          />
          <label class="form-check-label" for="femaleGender">
            Female
          </label>
        </div>

        <div class="form-check form-check-inline mb-0 me-4">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="maleGender"
            value="option2"
          />
          <label class="form-check-label" for="maleGender">
            Male
          </label>
        </div>

        <div class="form-check form-check-inline mb-0">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="otherGender"
            value="option3"
          />
          <label class="form-check-label" for="otherGender">
            Other
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-4">
          <select class="select">
            <option value="1">City</option>
            <option value="2">Lahore</option>
            <option value="3">Karachi</option>
            <option value="4">Islamabad</option>
          </select>
        </div>
        <div class="col-md-6 mb-4"></div>
      </div>

      <div class="form-outline mb-4">
        <input
          type="text"
          id="form3Example9"
          class="form-control form-control-lg"
        />
        <label class="form-label" for="form3Example9">
          DOB
        </label>
      </div>

      <div class="form-outline mb-4">
        <input
          type="text"
          id="form3Example97"
          class="form-control form-control-lg"
        />
        <label class="form-label" for="form3Example97">
          Email ID
        </label>
      </div>

      <div class="d-flex justify-content-end pt-3">
        <button type="button" class="btn btn-light btn-lg">
          Reset all
        </button>
        <a href="/login">
          <button type="button" class="btn btn-warning btn-lg ms-2">
            Submit form
          </button>
        </a>
      </div>
    </div>
  </Fragment>
);
