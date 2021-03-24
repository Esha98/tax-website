import React from "react";

import "./MainBanner.css";

const MainBanner = (props) => {
  return (
    <section className="">
      <div className="home-section">
        <div className="home-section-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="home-title">
                <span className="text">Smart &amp; Quick Planning</span>

                <h1>We Provide Financial Solutions</h1>

                <p>
                  Curabitur quam etsum lacus etsumis nulatis etsumisedvitae
                  etimuned nisle
                  <br />
                  varius loremis feugiat etis netsum
                </p>
                <a href="#" class="btn btn-white">
                  Contact Us
                </a>

                <a href="#" class="btn btn-blue">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-6">
        <div className="row"></div>
      </div>
    </section>
  );
};

export default MainBanner;
