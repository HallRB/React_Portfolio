import React, { Component } from 'react';
import Resumeimg from './Assetts/resume.png';
import "./resume.css";

class Resumecard extends Component {
    render() {
        return(
<div id="resumecontainermodern">
<img id="resumingmodern" alt="resume" src={Resumeimg} />
</div>
        )
    }
}
export default Resumecard