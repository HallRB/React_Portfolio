import React, { Component } from 'react';
import "./contactsynth.css";
import {  Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import "../App.css";
class Contact extends Component {

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
            </div>
            <div id="contactcontainersynth">

                <h1 className="glow">Contact</h1>
                <form className="formwrap" id='contact-form'>
  <input type='text' className="contactsynthforms" name='user_name' placeholder='Name' />
  <br/>
  <input type='email' className="contactsynthforms" name='user_email' placeholder='Email' />
  <br/>
  <textarea name='message' className="contactsynthforms" placeholder='Message'/>
  <br/>
  <input type='submit' className="contactsynthforms"  value='Send' onClick={() => document.getElementById("sent").innerHTML="Sent!"} />
</form>
<div id="sent"></div>
            </div>
            </div>
        )
        

    }
    
}
export default Contact