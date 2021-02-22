import React, { Component } from 'react';
import Resumeimg from './Assetts/resume.png';
import { Link } from 'react-router-dom';
import "./resume.css";

class Resumecard extends Component {
    render() {
        return(
<div className="resumecontainerclassic">
<div id="lpiwclassic">
             <h4 id="resumeclassic" class="linksclassic"><Link class="links" to="/"><button>Home</button></Link></h4>
             <h4 id="projectsclassic" class="linksclassic"><Link class="links" to="/projectsclassicview"><button>Projects</button></Link></h4>
             <h4 id="contactclassic" class="linksclassic"><Link class="links" to="/contactclassicview"><button>Contact</button></Link></h4>
             <h4 id="aboutmeclassic" class="linksclassic"><Link class="links" to="/aboutmeclassicview"><button>About Me</button></Link></h4>
</div>
<img className="resumingclassic" alt="resume" src={Resumeimg} />
</div>
        )
    }
}
export default Resumecard