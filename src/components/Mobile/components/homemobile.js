import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
// import Resume from "./resumemobile";
// import ThemeCard from "./Themes/themecard";
import Biocard from "./AboutMe/bio.js"
// import Projects from "./projectsmobile"
// import Contact from "./contactmobile";

class HomeMobile extends Component {
    render() {
    return(
        <div id="megawrapmobile">
        <div id="headermobile">
 <div id="navbarmobile">
     <div id="navbarwrapmobile">
         <a id="homemobilelink" href="/">Home</a>
     </div>
     <div id="biocardmobile">
     <Biocard></Biocard>
     </div>
 </div>

 {/* 
  <div id="lpiwmoderninner">
  <div className="center-col">
<ThemeCard></ThemeCard>
 </div>
<div id="aboutmemodernimp">
<Biocard></Biocard>
</div>
<p></p>
<div id="gluediv">
     <div id="skillsmainwrapclassic">
       <div id="skillsmainmodern">
       <div id="skillblockmodern">
       <div style={{height: '185px'}}><img alt="" id="skilljs"></img></div>
       <div style={{height: '185px'}}><img alt="" id="skillcss"></img></div>
       <div style={{height: '185px'}}><img alt="" id="skillexpress"></img></div>
       <div style={{height: '185px'}}><img alt="" id="skillbootstrap"></img></div>
       <div style={{height: '185px'}}><img alt="" id="skillgitbash"></img></div>
       <div style={{height: '185px'}}><img alt="" id="skillgithub"></img></div>
       <div style={{height: '185px'}}><img alt="" id="skillheroku"></img></div>
       <div style={{height: '185px'}}><img alt="" id="skillpostman"></img></div>
       <div style={{height: '185px'}}><img alt="" id="skillreact"></img></div>
       <div style={{height: '185px'}}><img alt="" id="skillnode"></img></div>
       <div style={{height: '185px'}}><img alt="" id="skillmysql"></img></div>
       <div style={{height: '185px'}}><img alt="" id="skillmongodb"></img></div>
       <div style={{height: '185px'}}><img alt="" id="skillvscode"></img></div>
       </div>

     </div>
     </div>
     </div>
     <p></p>
<div id="resumemodernimp">
<Resume></Resume>
</div>

<div id="contactmodernimp">
<Contact></Contact>
</div>

<div id="projectsmodernimp">
<Projects></Projects>
</div> */}


</div>
</div>
    )
}
}

export default HomeMobile