import React from "react";
import { Navbar } from "../components/navbar";
import CountUp from "react-countup";
import { Footer } from "../components/footer";


class Homepage extends React.Component {
   render() {
      const onComplete = () => {
         console.log("Completed!");
      };

      const onStart = () => {
         console.log("Started!");
      };
      const newLocal = (
         <CountUp
            className="account-balance"
            end={1605277}
            start={87503}
            duration={2.5}
            useEasing={true}
            useGrouping={true}
            separator=","
            decimals={0}
            decimal=","
            prefix="&dollar;"
            suffix="+"
            onComplete={onComplete}
            onStart={onStart}
         />
      );
      return (
         <>
         <div className="bg-img">
         <Navbar />
         </div>
            
            
            
            {/* <section id="hero">
               
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
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <a href="#about" className="btn-get-started scrollto">
                    Get Started
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
             
              >
                <img
                  src={require("../assets/hero-img.png")}
                  className="img-fluid animated"
                  alt
                />
              </div>
            </div>
          </div>
        </section> */}
            {/* <section className="cont1">
            <div class="container-fluid text-center " >
                <div className="row">
                    <div className="col-md-6 boxm" >
                    <div className="row counter">{newLocal}</div>
                    <div className="text-center info"> adipisicing elit. Quisquam, voluptatum.</div>
                    <div className="text-center upadte">Last upadted 2023</div>
                </div>
                
                    <div className="col-md-6 boxm" >
                    <div className="row counter">{newLocal}</div>
                    <div className="text-center info"> adipisicing elit. Quisquam, voluptatum.</div>
                    <div className="text-center upadte">Last upadted 2023</div>
                    </div>
                    
                </div>
            </div>

        </section> */}
            <section id="whyus" className="whyus section-bg ">
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

            {/* Model Section*/}

            <section id="models" className="models" style={{ background: '#F68E3C' ,paddingBottom:"100px"}}>
               <div className="container" data-aos="fade-up">
                  <div className="section-model">
                     <h2>Our Models</h2>
                     
                  </div>
                  <div className="row">
                     <div
                        className="col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                     >
                        <div className="box featured">
                           <h2>
                              Group <br />
                              Discount Model
                           </h2>
                           <ul>
                              <li>
                                 <i class="fa-solid fa-check fa-fw " />{" "}
                                 Customers can form groups or associations to
                                 collectively subscribe to the solar farm.
                              </li>
                              <li>
                                 <i className="fa-solid fa-check fa-fw" /> By
                                 pooling their subscriptions, they can access
                                 lower subscription rates
                              </li>
                           </ul>
                           <center>   
                           <a href="#" className="buy-btn ">
                              <div className ="text">Get Started</div></a>
                           </center>  
                        </div>
                     </div>
                     <div
                        className="col-lg-3 mt-3 mt-lg-0"
                        data-aos="fade-up"
                        data-aos-delay={200}
                     >
                        <div className="box featured">
                           <h2 >
                              Subscription
                               Model
                           </h2>
                        
                           <ul>
                              <li>
                                 <i class="fa-solid fa-check fa-fw" />
                                 Reduction in the home electricity bill
                              </li>
                              
                           </ul>
                         <center>   
                           <a href="#" className="buy-btn ">
                              <div className ="text">Get Started</div></a>
                           </center>                           
                        </div>
                     </div>
                     <div
                        className="col-lg-3 mt-3 mt-lg-0"
                        data-aos="fade-up"
                        data-aos-delay={300}
                     >
                        <div className="box featured  ">
                           <h2>
                              Solar Credits <br />
                              and Bonds{" "}
                           </h2>
                         
                           <ul>
                              <li>
                                 <i class="fa-solid fa-check fa-fw" />
                                 Conversion of solar credits as dividend in a
                                 bulk
                              </li>
                           </ul>
                           <center>   
                           <a href="#" className="buy-btn ">
                              <div className ="text">Get Started</div></a>
                           </center>  
                        </div>
                     </div>
                     <div
                        className="col-lg-3 mt-3 mt-lg-0"
                        data-aos="fade-up"
                        data-aos-delay={300}
                     >
                        <div className="box featured  ">
                           <h2>
                              Solar Credits <br />
                              Trading{" "}
                           </h2>
                        
                           <ul>
                              <li>
                                 <i class="fa-solid fa-check fa-fw" />
                                 Sale of solar credits by prices setted up by
                                 the individuals
                              </li>
                           </ul>
                           <center>   
                           <a href="#" className="buy-btn ">
                              <div className ="text">Get Started</div></a>
                           </center>  
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section id="contact" className="contact">
               <div className="container" data-aos="fade-up">
                  <div className="section-title">
                     <h2>Contact</h2>
                     <p>
                       
                     </p>
                  </div>
                  <div className="row">
                     <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                           <div className="address">
                              <i class="fa-solid fa-location-dot"></i>
                              <h4>Location:</h4>
                              <p>177 Huntington Ave, 
                              Boston, Massachusetts
                              02115, US</p>
                           </div>
                           <div className="email">
                              <i class="fa-solid fa-envelope"></i>
                              <h4>Email:</h4>
                              <p><a mailto="admin@zensolarciti.com">admin@zensolarciti.com</a></p>
                           </div>
                           <div className="phone">
                              <i class="fa-solid fa-phone"></i>
                              <h4>Call:</h4>
                              <p>+1 781 325 1852</p>
                           </div>
                           <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.845963127622!2d-71.26236858780574!3d42.4522934291486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39c3cc4e45f9f%3A0x9fc0240788c3f29d!2s3%20Holton%20Rd%2C%20Lexington%2C%20MA%2002421%2C%20USA!5e0!3m2!1sen!2sin!4v1692821242937!5m2!1sen!2sins"
                              frameBorder={0}
                              style={{ border: 0, width: "100%", height: 290 }}
                              allowFullScreen
                           />
                        </div>
                     </div>
                     <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form
                           action="forms/contact.php"
                           method="post"
                           role="form"
                           className="php-email-form"
                        >
                           <div className="row">
                              <div className="form-group col-md-6">
                                 <label htmlFor="name">Your Name</label>
                                 <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    required
                                 />
                              </div>
                              <div className="form-group col-md-6">
                                 <label htmlFor="name">Your Email</label>
                                 <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    required
                                 />
                              </div>
                           </div>
                           <div className="form-group">
                              <label htmlFor="name">Subject</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 name="subject"
                                 id="subject"
                                 required
                              />
                           </div>
                           <div className="form-group">
                              <label htmlFor="name">Message</label>
                              <textarea
                                 className="form-control"
                                 name="message"
                                 rows={10}
                                 required
                                 defaultValue={""}
                              />
                           </div>
                           <div className="my-3">
                              <div className="loading">Loading</div>
                              <div className="error-message" />
                              <div className="sent-message">
                                 Your message has been sent. Thank you!
                              </div>
                           </div>
                           <div className="text-center">
                              <button type="submit">Send Message</button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </section>

            {/* footer. */}
            <Footer />
         </>
      );
   }
}

export { Homepage };
