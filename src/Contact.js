import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('msghide').style.visibility = 'visible';
    }
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-12 d-flex justify-content-center">
          <h1>Register</h1>
        </div>
      </div>
      <div id='msghide' className="row">
        <div className="col-12 d-flex justify-content-center">
          <h1>Thank you For Registration!!!</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center">
          <div className="col-3">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Username"
              name="username"
            />
          </div>
        </div>
        <div className="row pt-5 d-flex justify-content-center">
          <div className="col-3">
            <input
              required
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
            />
          </div>
        </div>
        <div className="row pt-5 d-flex justify-content-center">
          <div className="col-3">
            <input
              required
              type="number"
              class="form-control"
              placeholder="Phone Number"
              name="phone"
            />
          </div>
        </div>
        <div className="row pt-5 d-flex justify-content-center">
          <div className="col-3">
            <input
              required
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
            />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-6 d-flex justify-content-end">
              <Link to='/'>
            <button className="btn btn-block btn-success" type="submit">
            Back to  Login
            </button>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-start">
            <button className="btn btn-block btn-success" type="submit">
              Register Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
