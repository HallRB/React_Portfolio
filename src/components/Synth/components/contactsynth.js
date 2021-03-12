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
            <div className="contactwrap" id="contactwrapretro">
    <h1>Contact Me</h1>
    <h2>Phone: 210-800-3046</h2>
    <h2>Email: Richardbrianhall@gmail.com</h2>
    <h2>Github: https://Github.com/HallRB</h2>
    <h2>LinkedIn: https://LinkedIn.com/in/hallrb</h2>
</div>
            </div>
        )
        

    }
    
}
export default Contact