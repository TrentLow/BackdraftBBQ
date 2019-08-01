import React from "react";

const PhoneNumber = ({ number }) => (
  <div>
    <a href={`tel:${number}`}>Call{number}</a>
  </div>
);

const Contact = props => (
  <div>
    <h1>Contact</h1>
    <div
      id="contact"
      style={{
        borderRadius: "5px",
        backgroundColor: "white"
      }}
    >
      <p>Business Hours:</p>
      <p>Monday-Thursday: 7am/8pm Friday-Saturday: 7am/9pm</p>
      <p>We would love to hear from you! Remember we do carry out!</p>
      <p>Contact us so we can get in touch about your catering needs!!</p>
      <PhoneNumber number="(701)-453-3452" />
      Catering:
      <PhoneNumber number="(701)-453-3413" />
      <div>
        <a href="mailto:backdraftbbqnd@gmail.com">Email Us</a>
      </div>
      <iframe
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.36710009526!2d-101.73908468416074!3d48.31502264676407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52df4783895a2599%3A0xa07fcafccd80dde!2s213+Main+St+N%2C+Berthold%2C+ND+58718!5e0!3m2!1sen!2sus!4v1556233846926!5m2!1sen!2sus"
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen
      />
    </div>
  </div>
);

export default Contact;
