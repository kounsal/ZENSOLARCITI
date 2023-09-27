import React, { Component } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { NavLink } from "react-router-dom";
import "./entp.css";
import { hover } from "@testing-library/user-event/dist/hover";

class Entp extends Component {
  render() {
    return (
      <>
        <div className="bg-img2">
          <div className="header_section">
            <div className="header_left">
              <div className="banner_main">
                <h1 className="banner_taital ">
                  Large <span className="custom-text-head2">Enterprise</span>
                </h1>

                <p className="banner_text">
                  In the dynamic realm of corporate operations, managing energy
                  costs has evolved into a strategic imperative. Community Solar
                  with ZSC offers a transformative solution for businesses
                  aiming to align with sustainability goals.{" "}
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

        {/* <section className="">
          <div className="services_section layout_padding">
            <div className="container">
              <div className="row">
                <div class="container-fluid">
                  <div class="row justify-content-center align-items-center full-height">
                    <div class="col-md-8 text-center ">
                      <h2 class="transparent-heading mb-4">
                        Zen Solar Enterprise Solutions
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  {/* <h1 className="services_taital">
                    Zen Solar Enterprise Solutions
                  </h1> */}

        {/* <p className="services_text">
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
                    your company's reputation as a responsible corporate citizen
                  </p>
                </div> */}
        {/* <div className="col-md-4 col-sm-0">
                  <div>
                    <img
                      src={require("../assets/solar-field.jpg")}
                      className="image_1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
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
                        Zen Solar Enterprise Solutions
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
                      src={require("../assets/solar-farm.png")}
                      className="image_1"
                      alt="Solar Field"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="Entp">
          <div className="what_we_do_section layout_padding">
            <div className="container">
              <h1 className="what_taital">
                SUSTAINABLE ENERGY STRATEGIES FOR YOUR BUSINESS
              </h1>
              <p className="what_text">Lorem wdkiwoi </p>
              <div className="what_we_do_section_2">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="box_main">
                      <div className="icon_1">
                        <img src="images/icon-1.png" />
                      </div>
                      <h3 className="accounting_text">Accounting</h3>
                      <p className="lorem_text">
                        Lorem Ipsum is simply dummy text of the printing and
                      </p>
                      <div className="moremore_bt_1">
                        <a href="#">Read More </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="box_main active">
                      <div className="icon_1">
                        <img src="images/icon-2.png" />
                      </div>
                      <h3 className="accounting_text">Advisor</h3>
                      <p className="lorem_text">
                        Lorem Ipsum is simply dummy text of the printing and
                      </p>
                      <div className="moremore_bt_1">
                        <a href="#">Read More </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="box_main">
                      <div className="icon_1">
                        <img src="images/icon-3.png" />
                      </div>
                      <h3 className="accounting_text">Investment</h3>
                      <p className="lorem_text">
                        Lorem Ipsum is simply dummy text of the printing and
                      </p>
                      <div className="moremore_bt_1">
                        <a href="#">Read More </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="box_main">
                      <div className="icon_1">
                        <img src="images/icon-4.png" />
                      </div>
                      <h3 className="accounting_text">Financial</h3>
                      <p className="lorem_text">
                        Lorem Ipsum is simply dummy text of the printing and
                      </p>
                      <div className="moremore_bt_1">
                        <a href="#">Read More </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="Entp">
          <div className="services_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <img
                      src={require("../assets/img/lenp1.jpg")}
                      className="image_1 imagehide"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <h1 className="services_taital">
                    YOUR ONE-STOP SHOP FOR COMMUNITY SOLAR
                  </h1>
                  <p className="services_text">
                    Elevate your Community Solar endeavors with ZSC Enterprise,
                    your ultimate partner in navigating the intricate landscape
                    of distributed generation programs. Elevate your Community
                    Solar endeavors with ZSC Enterprise, your ultimate partner
                    in navigating the intricate landscape of distributed
                    generation programs. ZSC offers a winning blend of
                    cutting-edge technology, local expertise, and unwavering
                    customer support, paving the way for enhanced predictability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* modified below */}
        <section className="Entp">
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
                      src={require("../assets/solar-farm.png")}
                      className="image_2"
                      alt="Solar Field"
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <p className="services_text">
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

        <section className="">
          <div className="services_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="services_taital">
                    EXPERIENCED TEAM + INDUSTRY-LEADING PLATFORM
                  </h1>
                  <p className="services_text">
                    <h4>
                      Elevating Excellence: ZSC's Expertise and Innovation{" "}
                    </h4>
                    ZSC stands at the forefront of the industry, driven by a
                    potent blend of a skilled team and advanced technology.
                    <br />
                    <br />
                    <h4>Empowering Renewable Energy Ambitions</h4>
                    ZSC leads the charge in renewable energy pursuits. Our
                    dedicated account management team collaborates closely to
                    tailor a roadmap for your goals. What sets us apart is our
                    adaptability – our strategy evolves with your needs,
                    ensuring unwavering success.
                    <br />
                    <br />
                    <h4>Efficiency in Energy Payments</h4>
                    ZSC's mastery extends to an advanced billing system that
                    consolidates utility payments across diverse markets into
                    one invoice. Complexity gives way to simplicity as our
                    billing harmonizes state markets and Community Solar
                    developers under a single, detailed bill, streamlining once
                    intricate processes.
                    <br />
                    <br />
                  </p>
                </div>
                <div className="col-md-4">
                  <div>
                    <img
                      src={require("../assets/community.jpg")}
                      className="image_1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="services_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <img
                      src={require("../assets/img/lenp1.jpg")}
                      className="image_1 imagehide"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <h1 className="services_taital">
                    COMMUNITY SOLAR FOR YOUR EMPLOYEES AND CUSTOMERS
                  </h1>
                  <p className="services_text">
                    <h4>
                      Empower Enterprise and Drive Change with ZSC Community
                      Solar{" "}
                    </h4>
                    Amplify your enterprise's impact through ZSC Community
                    Solar, extending clean energy benefits to employees,
                    customers, and broader initiatives.
                    <br />
                    <br />
                    <h4>Unleashing the Power of ZSC Community Solar</h4>
                    ZSC Community Solar goes beyond your company's boundaries,
                    offering clean energy advantages to employees and customers.
                    When you refer others to the program, ZSC acknowledges your
                    support with a donation to a meaningful cause.
                    <br />
                    <br />
                    <h4>Benefits and Impact Combined</h4>
                    Imagine providing Community Solar perks to your stakeholders
                    while supporting a cause close to your heart. This dual
                    benefit enhances employee satisfaction and showcases your
                    commitment to renewable energy expansion.
                    <br />
                    <br />
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
export { Entp };
