import React, { Component } from 'react';
import "./contactsynth.css";
import {  Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import "../App.css";
class Contact extends Component {

    render() {
        
        return(
            <div id="allwrap">                               
            <div className="headercss">
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
            <div className="contactcontainer">

                <h1 className="glow">Contact</h1>
                <form className="formwrap" id='contact-form'>
  <input type='text' name='user_name' placeholder='Name' />
  <br/>
  <input type='email' name='user_email' placeholder='Email' />
  <br/>
  <textarea name='message' placeholder='Message'/>
  <br/>
  <input type='submit' value='Send' onClick={() => document.getElementById("sent").innerHTML="Sent!"} />
</form>
<div id="sent"></div>
            </div>
            </div>
        )
        

    }
    
}
export default Contact