import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to our car rental service! We are dedicated to providing the
        best rental experience.
      </p>

      <h2>Our Team</h2>
      <div className="team">
        <div className="team-member">
          <h3>Irfan</h3>
          <p>
            Irfan is our operations manager, ensuring everything runs smoothly.
            He loves cars and has a keen eye for detail.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:irfan@example.com">irfanskh21@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567891">+91 74998 34654</a>
          </p>
        </div>
        <div className="team-member">
          <h3>Om</h3>
          <p>
            Om is our customer service specialist. He is always ready to assist
            you with any queries and provide the best solutions.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:om@example.com">omwanere593@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567892">+91 96040 24207</a>
          </p>
        </div>
        <div className="team-member">
          <h3>Deepika</h3>
          <p>
            Deepika handles our marketing and outreach. Her creativity helps us
            reach more customers and enhance their experience.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:deepika@example.com">deepikapatil512@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567893">+91 92846 89130</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
