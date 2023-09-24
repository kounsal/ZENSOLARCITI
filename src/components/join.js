import React, { Component } from "react";

class Join extends Component {
  render() {
    return (
      <>
        <section id="hero">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h1>THE SMARTER, CLIMATE-FRIENDLY ENERGY OPTION</h1>
                <h2>
                  No installations, fees or fuss — just easy access to
                  locally-produced, money-saving solar energy.
                </h2>
                <div className="row">
                  <div className="col-md-6">
                    <div class="input-group col-md-3">
                      <input
                        class="form-control cust-field"
                        placeholder="Enter Email"
                      />
                      <span class="input-group-btn">
                        <button class="btn cust-button">Join</button>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-center justify-content-lg-start"></div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <img
                  src={require("../assets/hero-img.png")}
                  className="img-fluid animated"
                  alt
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export { Join };
