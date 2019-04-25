import React from "react";

const PhoneNumber = ({number}) => (<div><a href={`tel:${number}`}>Call{number}</a></div>)



const Contact = (props) =>(
    <div id="contact" style={{ borderRadius: "5px", margin: "0 auto", backgroundColor: "white", width: "45%"}}>
    <h1>Contact</h1>
    <PhoneNumber number="(701)-453-3452"/>
    <PhoneNumber number="(701)-000-0000"/>
    <div><a href="mailto:backdraftbbqnd@gmail.com">Email Us</a></div>
    </div>
);

export default Contact;