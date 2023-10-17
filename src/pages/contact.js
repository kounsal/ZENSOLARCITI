// import { Component } from "react";

// import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
// class Contact extends Component {
//   render() {
function Contact() {
  return (
    <>
      <section id="contact" className="contact Entp">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 style={{ paddingTop: "30px" }}>Contact</h2>
            <p></p>
          </div>
          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i class="fa-solid fa-location-dot"></i>
                  <h4>Location:</h4>
                  <p>3 Holton Road Lexington Massachusetts MA 02421</p>
                </div>
                <div className="email">
                  <i class="fa-solid fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>admin@zensolarciti.com</p>
                </div>
                <div className="phone">
                  <i class="fa-solid fa-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 (781) 971-6828</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.845963127622!2d-71.26236858780574!3d42.4522934291486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39c3cc4e45f9f%3A0x9fc0240788c3f29d!2s3%20Holton%20Rd%2C%20Lexington%2C%20MA%2002421%2C%20USA!5e0!3m2!1sen!2sin!4v1692821242937!5m2!1sen!2sin"
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
      <Footer />
    </>
  );
}
// }
// export { Contact };
export default Contact;
