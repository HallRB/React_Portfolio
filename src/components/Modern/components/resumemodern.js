import React, { Component } from 'react';
import Resumecard from "./resumecard";
// import Resumefile from "./Assetts/ResumeRichardBHall.pdf";
import "./resume.css";

class Resume extends Component {
    render() {
    return(
        <div id="resumecardmodern">
<Resumecard></Resumecard>
{/* <div id="download"><Resumefile></Resumefile></div> */}
</div>
    )
}
}
export default Resume