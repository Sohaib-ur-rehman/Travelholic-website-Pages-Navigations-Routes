import React, { Fragment } from "react";
export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Home</li>
    </ol>

    <div className="header">
      <h1 className="display-3">ADMINISTRATOR LOGIN</h1>
    </div>

    <form>
      <div class="form-outline mb-4">
        <input type="email" id="form2Example1" class="form-control" />
        <label class="form-label" for="form2Example1">
          Email address
        </label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="form2Example2" class="form-control" />
        <label class="form-label" for="form2Example2">
          Password
        </label>
      </div>

      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              checked
            />
            <label class="form-check-label" for="form2Example31">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>

        <div class="col">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <a href="/admin">
        <button type="button" class="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </a>
      <div class="text-center"></div>
    </form>
  </Fragment>
);
