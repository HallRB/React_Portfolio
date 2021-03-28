import React, { Component } from 'react';
import Resumecard from "./resumecard";
// import Resumefile from "./Assetts/ResumeRichardBHall.pdf";
import "./resume.css";

class Resume extends Component {
    render() {
    return(
        <div id="megawrapclassic">
        <div className="resumecardclassic">
<Resumecard></Resumecard>
{/* <div id="download"><Resumefile></Resumefile></div> */}
</div>
</div>
    )
}
}
export default Resume