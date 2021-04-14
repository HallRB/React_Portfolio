import React, { Component } from 'react';
import "./contact.css";
import "../App.css";
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Contact extends Component {

    render() {
        
        return(
            <div id="megawrapretro">
                <div id="lpiwretro">
         Richard B. Hall
             <div id="lpiwretroinner">
             </div>
</div>
<div id="webbaroutretro">
    <div id="webbarinretro">
             <p id="homeretro" className="linksretro"><Link className="links" id="homeretro" to="/"></Link></p>
             <p id="resumeretro" className="linksretro"><Link className="links" id="resumeretro" to="/resumeretroview"></Link></p>
             <p id="projectsretro" className="linksretro"><Link className="links" id="projectsretro" to="/projectsretroview"></Link></p>
             <p id="contactretro" className="linksretro"><Link className="links" id="contactretro" to="/contactretroview"></Link></p>
             <p id="aboutmeretro" className="linksretro"><Link className="links" id="aboutmeretro" to="/aboutmeretroview"></Link></p>
             </div>
</div>
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
    <button id="copybuttonretro">Copy Linkedin Address</button>
    </CopyToClipboard>
    <CopyToClipboard text="richardbrianhall@gmail.com">
    <button id="copybuttonretro">Copy Email Address</button>
    </CopyToClipboard>
  
  </div>
</div>
    </div>
    </div>
            </div>


)
}
}
export default Contact