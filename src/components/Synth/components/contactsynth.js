import React, { Component } from 'react';
import "./contactsynth.css";
import {  Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import "../App.css";
import axios from 'axios';

class Contact extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  // resetForm(){
  //   this.setState({name: ‘’, email: ‘’, message: ‘’})
  // }

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
    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

    <label>Name</label>
    <input type="text" id="fname" className="contactformtext" name="name" placeholder="Your name.."  value={this.state.name} onChange={this.onNameChange.bind(this)}
    />

    <label>Email</label>
    <input type="email" id="email" className="contactformtext" name="email" placeholder="Your email" value={this.state.email} onChange={this.onEmailChange.bind(this)}
    />

    <label>Subject</label>
    <textarea className="contactformtext" id="subject" name="message" placeholder="Write something.."  value={this.state.message} onChange={this.onMessageChange.bind(this)}>
    </textarea>
    <input   className="contactformtext"  type="submit" value="Submit" />
    </form>

    </div>
    </div>
            </div>
            </div>
            </div>
        )
        

    }
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
 
}
export default Contact