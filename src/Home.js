import React, { useState } from "react";
import ReactDOM from "react-dom";
import NewHome from "./NewHome";
import { Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  const rightUserName = "test";
  const rightPassword = "test";
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleUsername = (e) => {
    setState({ ...state, username: e.target.value });
  };

  const handlePassword = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const handleSubmit = (e) => {
    if (state.username === rightUserName && state.password === rightPassword) {
      e.preventDefault();
      ReactDOM.render(<NewHome />, document.getElementById("root"));
    } else {
      e.preventDefault();
      document.getElementById("hide").style.visibility = "visible";
    }
  };
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-12 d-flex justify-content-center">
          <h1>Login</h1>
        </div>
      </div>
      <div id="hide" className="row">
        <div className="col-12 d-flex justify-content-center">
          <span>Invalid Credentials!!!</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row pt-5">
          <div className="col-12 d-flex justify-content-center">
            <div class="form-group ">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                name="username"
                value={state.username}
                onChange={handleUsername}
                required
              />
            </div>
          </div>
        </div>

        <div className="row pt-3">
          <div className="col-12 d-flex justify-content-center">
            <div class="form-group ">
              <input
                required
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                value={state.password}
                onChange={handlePassword}
              />
            </div>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-6 d-flex justify-content-end">
            <Link to="/contact">
              <button className="btn btn-block btn-success" type="submit">
                Register
              </button>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-start">
            <div class="form-group">
              <button className="btn btn-block btn-success" type="submit">
                Log In
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
