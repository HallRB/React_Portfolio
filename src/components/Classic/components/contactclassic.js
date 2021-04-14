import React, { Component } from 'react';
import "./contact.css";
import "../App.css";
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
class Contact extends Component {

    render() {
        
        return(


            <div id="megawrapclassic">

                <div id="lpiwclassic">
         Richard B. Hall
             <div id="lpiwclassicinner">
             </div>
</div>
<div id="webbarout">
    <div id="webbarin">
             <p id="homeclassic" className="linksclassic"><Link className="links" id="homeclassic" to="/"></Link></p>
             <p id="resumeclassic" className="linksclassic"><Link className="links" id="resumeclassic" to="/resumeclassicview"></Link></p>
             <p id="projectsclassic" className="linksclassic"><Link className="links" id="projectsclassic" to="/projectsclassicview"></Link></p>
             <p id="contactclassic" className="linksclassic"><Link className="links" id="contactclassic" to="/contactclassicview"></Link></p>
             <p id="aboutmeclassic" className="linksclassic"><Link className="links" id="aboutmeclassic" to="/aboutmeclassicview"></Link></p>
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
    <button id="copybuttonmodern">Copy Linkedin Address</button>
    </CopyToClipboard>
    <CopyToClipboard text="richardbrianhall@gmail.com">
    <button id="copybuttonmodern">Copy Email Address</button>
    </CopyToClipboard>
  
  </div>
</div>
    </div>
    </div>          </div>


        )
        

    }
    
}
export default Contact