import React, { Component } from 'react';
import "./contactsynth.css";
import {  Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import "../App.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';
class Contact extends Component {
 
  state = {
    value: '',
    copied: false,
  };

      render() {
        
        return(
            
            <div id="landingpagewrapsynth">                               
            <div className="headercsssynth">
            <Header title="Richard B. Hall">
                <Navigation id="navbarwrap">
                <Link to="/homesynthview">Home</Link>
                <Link to="/resumesynthview">Resume</Link>
                <Link to="/projectssynthview">Projects</Link>
                <Link to="/contactsynthview">Contact</Link>
                <Link to="/aboutmesynthview">About Me</Link>
                </Navigation>
            </Header>
            
            <div className="contactform">
              <div id="comingsooncontact"></div>
                <div className="contactforminner">
    <p>Contact Me</p>
    <div>
    <form id="contact-form">

    <label>Name</label>
    <input type="text" id="fname" className="contactformtext" name="name" placeholder="Your name.." 
    />
    <label>Email</label>
    <input type="email" id="email" className="contactformtext" name="email" placeholder="Your email"
    />
    <label>Subject</label>
    <textarea className="contactformtext" id="subject" name="message" placeholder="Write something.."> </textarea>
    <input   className="contactformtext"  type="submit" value="Submit" />
    </form>
    </div>

<div id="contactbox">

  <div id="contactp">Email: richardbrianhall@gmail.com</div>
  <div id="contactp">Linkedin: https://www.linkedin.com/in/hallrb/</div>
  <div id="copybuttons">
  
    <CopyToClipboard text="https://www.linkedin.com/in/hallrb/">
    <button id="copybutton">Copy Linkedin Address</button>
    </CopyToClipboard>
    <CopyToClipboard text="richardbrianhall@gmail.com">
    <button id="copybutton">Copy Email Address</button>
    </CopyToClipboard>
  
  </div>
</div>
    </div>
    </div>
            </div>
            </div>
        )
      }}
 

export default Contact