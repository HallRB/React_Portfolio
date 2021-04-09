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
            
            <div className="contactform">
                <div className="contactforminner">
    <p>Contact Me</p>
    <div>
    <form action="/action_page.php">
    <label>First Name</label>
    <input type="text" id="fname" className="contactformtext" name="firstname" placeholder="Your name.." />
    <label>Last Name</label>
    <input type="text" id="lname" name="lastname" className="contactformtext"placeholder="Your last name.." />


    <label>Email</label>
    <input type="email" id="email" className="contactformtext" name="email" placeholder="Your email" />


    <label>Subject</label>
    <textarea className="contactformtext" id="subject" name="subject" placeholder="Write something.."></textarea>
    <input  className="contactformtext" type="submit" value="Submit" />
    </form>
    </div>
    </div>
            </div>
            </div>
            </div>
        )
        

    }
    
}
export default Contact