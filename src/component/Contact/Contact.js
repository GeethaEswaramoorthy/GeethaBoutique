import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-content">
        {/* LEFT SIDE – CONTACT DETAILS */}
        <div className="contact-details">
          <p><strong>Email :</strong> geethaboutique@gmail.com</p>
          <p><strong>Phone :</strong> 1234567890</p>

          <p>
            <strong>Facebook :</strong>{" "}
            <a href="https://www.facebook.com/GEETHA-101346918867609/" target="_blank" rel="noreferrer">
              GEETHA Facebook Page
            </a>
          </p>

          <p>
            <strong>Instagram :</strong>{" "}
            <a href="https://instagram.com/Geetha.ethnic.weaves" target="_blank" rel="noreferrer">
              @Geetha Boutique
            </a>
          </p>

          <p><strong>Address :</strong></p>
          <p>
            10, 2th Cross Street, Rajaji Nagar,<br />
            Lawspet, Tiruppur – 605008
          </p>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <div className="contact-form">
          <label>Name</label>
          <input type="text" />

          <label>Email</label>
          <input type="email" />

          <label>Phone Number</label>
          <input type="text" />

          <label>Message</label>
          <textarea rows="4"></textarea>

          <button>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
