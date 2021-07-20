import React, { useState } from "react";
import ReactDOM from "react-dom";
import NewHome from "./NewHome";

const Home = () => {
  const username = "";
  const password = "";
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
    if (state.username === username && state.password === password) {
      e.preventDefault();
      alert("enter credentials");
    } else if (
      state.username === rightUserName &&
      state.password === rightPassword
    ) {
      ReactDOM.render(<NewHome />, document.getElementById("root"));
    } else {
      e.preventDefault();
      alert("wrong credentials");
    }
  };
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-12 d-flex justify-content-center">
          <h1>Login</h1>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-12 d-flex justify-content-center">
          <form>
            <div class="form-group ">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                name="username"
                value={state.username}
                onChange={handleUsername}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="row pt-3">
        <div className="col-12 d-flex justify-content-center">
          <form>
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
          </form>
        </div>
      </div>

      <div className="row pt-5">
        <div className="col-12 d-flex justify-content-center">
          <form>
            <div class="form-group">
              <button
                className="btn btn-block btn-success"
                onClick={handleSubmit}
              >
                Log IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
