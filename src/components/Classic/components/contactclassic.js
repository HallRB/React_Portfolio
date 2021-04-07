import React, { Component } from 'react';
import "./contact.css";
import "../App.css";
import { Link } from 'react-router-dom';

class Contact extends Component {

    render() {
        
        return(


            <div id="megawrapclassic">

                <div id="lpiwclassic">
         Richard B. Hall
             <div id="lpiwclassicinner">
             </div>
</div>
<div id="webbarout">
    <div id="webbarin">
             <p id="homeclassic" className="linksclassic"><Link className="links" id="homeclassic" to="/"></Link></p>
             <p id="resumeclassic" className="linksclassic"><Link className="links" id="resumeclassic" to="/resumeclassicview"></Link></p>
             <p id="projectsclassic" className="linksclassic"><Link className="links" id="projectsclassic" to="/projectsclassicview"></Link></p>
             <p id="contactclassic" className="linksclassic"><Link className="links" id="contactclassic" to="/contactclassicview"></Link></p>
             <p id="aboutmeclassic" className="linksclassic"><Link className="links" id="aboutmeclassic" to="/aboutmeclassicview"></Link></p>
             </div>
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