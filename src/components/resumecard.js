import React, { Component } from 'react';
import Resumeimg from './Assetts/resume.png';
import "./resume.css";

class Resumecard extends Component {
    render() {
        return(
<div className="resumecontainer">
<img id="resumingmain" alt="resume" src={Resumeimg} />
</div>
        )
    }
}
export default Resumecard