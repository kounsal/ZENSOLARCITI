import React, { Component } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
class Community extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="hero">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h1>COMMUNITY SOLAR FOR HOMEOWNERS AND RENTERS</h1>
                <h2>
                  Community solar farms in Massachusetts enable multiple
                  participants to share solar power benefits without individual
                  installations.
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
        <section className="comm2">
          <div className="services_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <img
                      src={require("../assets/comm2.jpg")}
                      className="image_1"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <h1 className="services_taital">NO HASSLES FOR HOMEOWNERS</h1>
                  <p className="services_text">
                    Unlock solar power for all with Community Solar! No
                    homeowner or condo-owner obstacle is too big. Embrace
                    affordable, hassle-free access. Say goodbye to upfront costs
                    and roof constraints. Join the movement and boost
                    eco-friendliness with ease. Embrace the sun's potential,
                    join Community Solar today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="comm1 Entp">
          <div className="services_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="services_taital">
                    RENTERS CAN CHOOSE TO SUPPORT RENEWABLE ENERGY
                  </h1>

                  <p className="services_text">
                    <h5 className="text-center">
                      {" "}
                      “Experience the Power of Community Solar: Empowering
                      Renters for a Greener Future!”
                      <br />
                    </h5>
                    Join the revolution of turning renters into advocates for
                    clean energy. Embrace the clean energy movement, unlock
                    solar savings, and be a part of a sustainable tomorrow.
                    Whether you rent or own, if you're an electricity consumer,
                    Community Solar welcomes you. Start making a change, tap
                    into solar energy, and enjoy the benefits today!
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
        <section className="comm2">
          <div className="services_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <img
                      src={require("../assets/comm2.jpg")}
                      className="image_1"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <h1 className="services_taital">Solar credit trading</h1>
                  <p className="services_text">
                    <h5>
                      Empower Your Energy Future: Solar Farming Subscriptions
                      and Dynamic Credit Trading
                    </h5>
                    Experience a paradigm shift in energy with solar farming
                    subscriptions, offering accessible renewable power without
                    installations or upfront costs. But there's more – take
                    control with dynamic credit trading. Accumulate solar
                    credits, trade within a microgrid at your rates, and
                    revolutionize energy systems. Enjoy perks like cutting costs
                    by selling excess credits during peak demand, boosting
                    microgrid resilience, and advocating sustainability. Every
                    solar credit you earn fuels a greener planet and a wealthier
                    wallet. Join today to shape a brighter, empowered energy
                    future!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="whyus" className="whyus section-bg Entp">
               <div className="container" data-aos="fade-up">
                  <div className="section-title">
                     <h2 className="text-center">Why Zen Solarciti</h2>
                  </div>
                  <div className="row">
                     <div
                        className="col-xl-3 col-md-6 d-flex align-items-stretch text-center"
                        data-aos="zoom-in"
                        data-aos-delay={100}
                     >
                        <div className="icon-box ">
                           <div className="icon text-center">
                           <i class="fa-solid fa-earth-americas"></i>
                           </div>
                           <h4 className="text-center">
                              <a href>Secure Our Planet's Future:</a>
                           </h4>
                          
                         <p>
                         Zen Solarciti Lights Your Path to a Cleaner, Brighter Future. Choose Sustainable Energy, Safeguarding Our Planet for Generations to Come.
                         </p>
                        </div>
                     </div>
                     <div
                        className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 text-center"
                        data-aos="zoom-in"
                        data-aos-delay={200}
                     >
                        <div className="icon-box">
                           <div className="icon">
                          
                           <i class="fa-solid fa-wallet"></i>
                           </div>
                           <h4>
                              <a href>Savings That Shine:</a>
                           </h4>
                          <p>
                          Your Investment, Multiplied. Bid Farewell to High Bills, Embrace Substantial Savings. Our Solar Solutions Cut Costs, Unlock Incentives, and Tax Benefits, Smart Financial Choice for You
                          </p>
                           
                        </div>
                     </div>
                     <div
                        className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 text-center"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                     >
                        <div className="icon-box">
                           <div className="icon">
                           <i class="fa-solid fa-users"></i>
                           </div>
                           <h4>
                              <a href>Join a Community of Changemakers:</a>
                           </h4>
                           
                        <p>
                        Zen Solarciti Values Sustainability, Progress, Positive Change. Embrace Solar Energy – Contribute to Global Shift Toward Clean Practices. Unite with Like-Minded Visionaries Shaping a Better Tomorrow.
                        </p>
                        </div>
                     </div>
                     <div
                        className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 text-center"
                        data-aos="zoom-in"
                        data-aos-delay={400}
                     >
                        <div className="icon-box">
                           <div className="icon">
                           <i class="fa-solid fa-house"></i>
                           </div>
                           <h4>
                              <a href>Simplifying Solar Power for You</a>
                           </h4>
                          <p>
                          Zen Solarciti's Expertise Makes Clean Energy Accessible. Tailored Solutions for Homes, Businesses, Communities. Reliable Energy, Reduced Bills. Choose Zen Solarciti for a Greener, More Accessible Future.
                          </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

        <Footer />
      </>
    );
  }
}
export { Community };
