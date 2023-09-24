import React, { Component } from "react";
import "./main.css";


class Footer extends Component {
   render() {
      return (
         <footer id="footer">
            <div className="footer-top">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3 col-md-6 footer-contact">
                        <h3>Zen Solarciti</h3>
                        <p>
                        3 Holton Road Lexington  <br />
                        Massachusetts
                           <br />
                           MA 02421 <br />
                           <br />
                           <strong>Phone:</strong> +1 (781) 971-6828
                           <br />
                           <strong>Email:</strong> admin@zensolarciti.coms
                           <br />
                        </p>
                     </div>
                     <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                           <li>
                              <i className="fa-solid fa-chevron-right"></i>{" "}
                              <a href="#">Home</a>
                           </li>
                           <li>
                              <i className="fa-solid fa-chevron-right"></i>{" "}
                              {"    "}
                              <a href="#">About us</a>
                           </li>
                           <li>
                              <i className="fa-solid fa-chevron-right"></i>{" "}
                              <a href="#">whyus</a>
                           </li>
                           <li>
                              <i className="fa-solid fa-chevron-right"></i>{" "}
                              <a href="#">Terms of service</a>
                           </li>
                           <li>
                              <i className="fa-solid fa-chevron-right"></i>{" "}
                              <a href="#">Privacy policy</a>
                           </li>
                        </ul>
                     </div>
                     <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Models</h4>
                        <ul>
                           <li>
                              <i className="fa-solid fa-chevron-right"></i>{" "}
                              <a href="#">Models</a>
                           </li>
                        </ul>
                     </div>
                     {/* <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Social Networks</h4>
                        <p>
                           Cras fermentum odio eu feugiat lide par naso tierra
                           videa magna derita valies
                        </p>
                        <div className="social-links mt-3">
                           <a href="#" className="twitter">
                              <i className="bx bxl-twitter" />
                           </a>
                           <a href="#" className="facebook">
                              <i className="bx bxl-facebook" />
                           </a>
                           <a href="#" className="instagram">
                              <i className="bx bxl-instagram" />
                           </a>
                           <a href="#" className="google-plus">
                              <i className="bx bxl-skype" />
                           </a>
                           <a href="#" className="linkedin">
                              <i className="bx bxl-linkedin" />
                           </a>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
            <div className="container footer-bottom clearfix">
               <div className="copyright">
                  © Copyright{" "}
                  <strong>
                     <span>Zen Solarciti</span>
                  </strong>
                  . All Rights Reserved
               </div>
            </div>
         </footer>
      );
   }
}
export { Footer };
