import React, { Component } from 'react';
import Resumeimg from './Assetts/Resume.JPG';
import "./resume.css";

class Resumecard extends Component {
    render() {
        return(
<div class="resumecontainer">
<img class="resuming" alt="resume" src={Resumeimg} />
</div>
        )
    }
}
export default Resumecard