import React, { Component } from 'react';
import Resumecard from "./resumecard";
// import Resumefile from "./Assetts/ResumeRichardBHall.pdf";
import "./resume.css";

class Resume extends Component {
    render() {
    return(
        <div id="megawrapretro">
        <div className="resumecardretro">
<Resumecard></Resumecard>
{/* <div id="download"><Resumefile></Resumefile></div> */}
</div>
</div>
    )
}
}
export default Resume