import React, { Component } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { NavLink } from "react-router-dom";
import "./entp.css";
import "../custom styles/home.css";

class Community extends Component {
  render() {
    return (
      <>
        <div className="bg-img3">
          <Navbar />
          <div className="header_section">
            <div className="header_left">
              <div className="banner_main">
                <h1 className="banner_taital ">
                  COMMUNITY SOLAR FOR{" "}
                  <span className="custom-text-head2">
                    HOMEOWNERS AND RENTERS
                  </span>
                </h1>

                <p className="banner_text">
                  In the dynamic realm of corporate operations, managing energy
                  costs has evolved into a strategic imperative. Community Solar
                  with ZSC offers a transformative solution for businesses
                  aiming to align with sustainability goals.
                </p>

                <div className="btn_main">
                  <div className="contact_bt">
                    <NavLink to="/Contact">Enquire Now</NavLink>
                  </div>
                  <div className="contact_bt">
                    <NavLink to="/Contact">Book a meeting</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* below is custom by me
         */}
        <section>
          <div className="services_section layout_padding">
            <div className="container">
              <div className="row">
                <div class="container-fluid">
                  <div class="row justify-content-center align-items-center full-height">
                    <div class="col-md-8 text-center">
                      <h2 class="transparent-heading mb-4">
                        NO HASSLES FOR HOMEOWNERS
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <p className="services_text">
                    In the dynamic realm of corporate operations, managing
                    energy costs has evolved into a strategic imperative.
                    Community Solar with ZSC offers a transformative solution
                    for businesses aiming to align with sustainability goals.
                    <br />
                    <br />
                    Community Solar enables collaborative sustainability by
                    uniting enterprises for a greener future. Its streamlined
                    approach ensures a smooth transition to renewable energy,
                    debunking the notion that sustainability hampers
                    profitability. Participating in ZSC's initiative enhances
                    your company's reputation as a responsible corporate
                    citizen.
                  </p>
                </div>
                <div className="col-md-7 col-sm-0">
                  <div>
                    <img
                      src={require("../assets/hasslefree.png")}
                      className="image_1"
                      alt="Solar Field"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* modified below */}
        <section className="Entp1">
          <div className="services_section layout_padding">
            <div className="container">
              <div className="row">
                <div class="container-fluid">
                  <div class="row justify-content-center align-items-center full-height">
                    <div class="col-md-10 text-center">
                      <h2 class="normal-heading mb-4">
                        YOUR ONE-STOP SHOP FOR COMMUNITY SOLAR
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-0">
                  <div>
                    <img
                      src={require("../assets/goodvibes.png")}
                      className="image_2"
                      alt="Solar Field"
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <p className="services_text_1">
                    Elevate your Community Solar endeavors with ZSC Enterprise,
                    your ultimate partner in navigating the intricate landscape
                    of distributed generation programs.
                    <br />
                    <br />
                    Elevate your Community Solar endeavors with ZSC Enterprise,
                    your ultimate partner in navigating the intricate landscape
                    of distributed generation programs. ZSC offers a winning
                    blend of cutting-edge technology, local expertise, and
                    unwavering customer support, paving the way for enhanced
                    predictability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="whyus" className="whyus section-bg ">
          <div className="container" data-aos="fade-up">
            {/* <div className="section-title">
              <h2 className="text-center">Why Zen Solarciti</h2>
            </div> */}
            <div class="container-fluid">
              <div class="row justify-content-center align-items-center full-height">
                <div class="col-md-6 text-center ">
                  <h2 class="transparent-heading ">Why Zen Solarciti</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch text-center  "
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <div className="icon-box  ">
                  <div className="icon text-center ">
                    <i class="fa-solid fa-earth-americas"></i>
                  </div>
                  <h4 className="text-center">
                    <a href>Secure Our Planet's Future:</a>
                  </h4>

                  <p className="custom-font">
                    Zen Solarciti Lights Your Path to a Cleaner, Brighter
                    Future. Choose Sustainable Energy, Safeguarding Our Planet
                    for Generations to Come.
                  </p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 text-center"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="icon-box ">
                  <div className="icon">
                    <i class="fa-solid fa-wallet"></i>
                  </div>
                  <h4>
                    <a href>Savings That Shine:</a>
                  </h4>
                  <p className="custom-font">
                    Your Investment, Multiplied. Bid Farewell to High Bills,
                    Embrace Substantial Savings. Our Solar Solutions Cut Costs,
                    Unlock Incentives, and Tax Benefits, Smart Financial Choice
                    for You
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 text-center"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="icon-box ">
                  <div className="icon">
                    <i class="fa-solid fa-users"></i>
                  </div>
                  <h4>
                    <a href>Join a Community of Changemakers:</a>
                  </h4>

                  <p className="custom-font">
                    Zen Solarciti Values Sustainability, Progress, Positive
                    Change. Embrace Solar Energy – Contribute to Global Shift
                    Toward Clean Practices. Unite with Like-Minded Visionaries
                    Shaping a Better Tomorrow.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 text-center"
                data-aos="zoom-in"
                data-aos-delay={400}
              >
                <div className="icon-box ">
                  <div className="icon">
                    <i class="fa-solid fa-house"></i>
                  </div>
                  <h4>
                    <a href>Simplifying Solar Power for You</a>
                  </h4>
                  <p className="custom-font">
                    Zen Solarciti's Expertise Makes Clean Energy Accessible.
                    Tailored Solutions for Homes, Businesses, Communities.
                    Reliable Energy, Reduced Bills. Choose Zen Solarciti for a
                    Greener, More Accessible Future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Entp">
          <div
            class="row justify-content-center"
            style={{ paddingTop: "60px" }}
          >
            <button type="button" class="btn btn-outline-primary custom-bttn">
              Get In Touch
            </button>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}
export { Community };
