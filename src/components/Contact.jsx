import React from 'react';

function Contact() {
  return (
    <div className="contact1" id="contact" data-aos="fade-up">
      <div className="container-contact1">
        <div className="contact1-pic js-tilt" data-tilt>
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_TNi3iOF9S4.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <form name="contact" netlify>

          <span className="contact1-form-title">Get in touch</span>

      
          <div className="wrap-input1 validate-input" data-validate="Name is required">
            <input
              className="input1"
              type="text"
              placeholder="Name"
              name="name"
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className="wrap-input1 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input1"
              type="email"
              placeholder="Email"
              name="email"
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="wrap-input1 validate-input" data-validate="Subject is required">
            <input
              className="input1"
              type="text"
              placeholder="Subject"
              name="subject"
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="wrap-input1 validate-input" data-validate="Message is required">
            <textarea
              className="input1"
              placeholder="Message"
              name="message"
            ></textarea>
            <span className="shadow-input1"></span>
          </div>

          <div className="container-contact1-form-btn">
            <button className="contact1-form-btn" type="submit">
              <span>
                Submit
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
