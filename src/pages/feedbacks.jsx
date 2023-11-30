import bilal from "./image/bilal.jpeg";
import profile from "./image/profile.jpg";
import React, { Fragment } from "react";
export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Home</li>
    </ol>

    <div className="header">
      <h1 className="display-3">User Feedbacks</h1>
    </div>

    <section>
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-xl-8 text-center">
          <p class="mb-4 pb-2 mb-md-5 pb-md-0">
            User feedbacks are added along with the newest ones from the
            database that users submit.
          </p>
        </div>
      </div>

      <div class="row text-center">
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="d-flex justify-content-center mb-4">
            <img
              src={bilal}
              class="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 class="mb-3">Bilal</h5>
          <h6 class="text-primary mb-3">Web Developer</h6>
          <p class="px-xl-3">
            <i class="fas fa-quote-left pe-2"></i>At first i thought this as a
            simple website but this has sloved my all problems of travel and
            trips along with their bookings.
          </p>
          <ul class="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star-half-alt fa-sm text-warning"></i>
            </li>
          </ul>
        </div>
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="d-flex justify-content-center mb-4">
            <img
              src={profile}
              class="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 class="mb-3">Sohaib</h5>
          <h6 class="text-primary mb-3">Graphic Designer</h6>
          <p class="px-xl-3">
            <i class="fas fa-quote-left pe-2"></i>I have used this website
            multiple times and it has been quite a very good experience
          </p>
          <ul class="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
          </ul>
        </div>
        <div class="col-md-4 mb-0">
          <div class="d-flex justify-content-center mb-4">
            <img
              src={bilal}
              class="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 class="mb-3">John Smith</h5>
          <h6 class="text-primary mb-3">Marketing Specialist</h6>
          <p class="px-xl-3">
            <i class="fas fa-quote-left pe-2"></i>At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti.
          </p>
          <ul class="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-warning"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="card-body m-3">
              <div class="row">
                <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                    class="rounded-circle img-fluid shadow-1"
                    alt="woman avatar"
                    width="200"
                    height="200"
                  />
                </div>
                <div class="col-lg-8">
                  <p class="text-muted fw-light mb-4">
                    This is a very good website and it has all the potentials to
                    become a good website along with this we can view edit, and
                    make reservations everywhere.
                  </p>
                  <p class="fw-bold lead mb-2">
                    <strong>Anna Smith</strong>
                  </p>
                  <p class="fw-bold text-muted mb-0">Product manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-xl-8 text-center">
          <h3 class="mb-4">International User Feedbacks.....</h3>
          <p class="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>
      </div>

      <div class="row text-center">
        <div class="col-md-6 mb-4 mb-md-0">
          <div class="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(22).webp"
              class="rounded-circle shadow-1-strong"
              width="100"
              height="100"
            />
          </div>
          <p class="lead my-3 text-muted">
            "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
            elit sed ut perspiciatis unde omnis."
          </p>
          <p class="font-italic font-weight-normal mb-0">- Anna Morian</p>
        </div>
        <div class="col-md-6 mb-0">
          <div class="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
              class="rounded-circle shadow-1-strong"
              width="100"
              height="100"
            />
          </div>
          <p class="lead my-3 text-muted">
            "Neque cupiditate assumenda in maiores repudiandae mollitia
            architecto elit sed adipiscing elit."
          </p>
          <p class="font-italic font-weight-normal mb-0">- Teresa May</p>
        </div>
      </div>
    </section>
  </Fragment>
);
