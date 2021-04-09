import React, { Component } from 'react';
import "./contactsynth.css";
import {  Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import "../App.css";
import axios from 'axios';

class Contact extends Component {


    
    //  Submit Handler
      handleFormSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
      }


    //   Form Handler
      constructor(props) {
        super(props);
        this.state = {
          fname: '',
          lname: '',
          email: '',
          message: '',
          mailSent: false,
          error: null
        }
      }
      
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
    <input type="text" id="fname" className="contactformtext" name="firstname" placeholder="Your name.."
    value={this.state.fname}
    onChange={e => this.setState({ fname: e.target.value })}
    />

    <label>Last Name</label>
    <input type="text" id="lname" name="lastname" className="contactformtext"placeholder="Your last name.." 
        value={this.state.lname}
        onChange={e => this.setState({ lname: e.target.value })}
    />

    <label>Email</label>
    <input type="email" id="email" className="contactformtext" name="email" placeholder="Your email" 
        value={this.state.email}
        onChange={e => this.setState({ email: e.target.value })}
      />

    <label>Subject</label>
    <textarea className="contactformtext" id="subject" name="subject" placeholder="Write something.."
    onChange={e => this.setState({ message: e.target.value })}
    value={this.state.message}
    >
    </textarea>
    <input  className="contactformtext"  type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
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