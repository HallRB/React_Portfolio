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
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/aboutme">About Me</Link>
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