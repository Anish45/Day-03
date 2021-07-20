import React from "react";
import img from './randomitem.jpg'


const NewHome = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12">
            <div class="input-group">
              {" "}
              <input type="search" class="form-control" />{" "}
              <span class="input-group-addon">
                <input type="submit" value="Search" class="btn btn-primary" />
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-4">
            <div class="card">
              <img src={img} class="card-img-top" alt="AI"></img>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <img src={img} class="card-img-top" alt="AI"></img>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <img src={img} class="card-img-top" alt="AI"></img>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-4">
            <div class="card">
              <img src={img} class="card-img-top" alt="AI"></img>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <img src={img} class="card-img-top" alt="AI"></img>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <img src={img} class="card-img-top" alt="AI"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
