import React, { Component } from 'react';
import "./contact.css";


class Contact extends Component {
    render() {
        return(
            <div class="contactcontainer">
                <h1 class="glow">Contact</h1>
                <form class="formwrap" id='contact-form'>
  <input type='text' name='user_name' placeholder='Name' />
  <br/>
  <input type='email' name='user_email' placeholder='Email' />
  <br/>
  <div id="textwrap">
  <textarea name='message' placeholder='Message'/>
  </div>
  <br/>
  <input type='submit' value='Send' />
</form>

            </div>
        )
    }
}
export default Contact