import React, { Component } from 'react';
import "./contact.css";


class Contact extends Component {

    render() {
        
        return(
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

        )
        

    }
    
}
export default Contact