import React, { Component } from 'react';
import "./contact.css";
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
            <div className="contactwrap" id="contactwrapretro">
    <h1>Contact Me</h1>
    <h2>Phone: 210-800-3046</h2>
    <h2>Email: Richardbrianhall@gmail.com</h2>
    <h2>Github: https://Github.com/HallRB</h2>
    <h2>LinkedIn: https://LinkedIn.com/in/hallrb</h2>
</div>
<div id="sent"></div>
            </div>

        )
        

    }
    
}
export default Contact