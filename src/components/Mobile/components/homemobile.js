import React, { Component } from 'react';
import "../App.css";
import Resumeimg from './Assetts/resume.png';
import Empdir from "./Projects/Empdir";
import Budtra from "./Projects/Budtra";
import Fittra from "./Projects/Fittra";
import Burgerhub from "./Projects/Burgerhub";
import Survive from "./Projects/Survive";
import Planner from "./Projects/Planner";
import Notespage from "./Projects/Notes";
import Password from "./Projects/Password";
import Book from "./Projects/Book";
import Meta from "./Projects/Meta";
import Sellify from "./Projects/sellify";
import Arcadea from "./Projects/arcadeutopia";
import Myart from "./Projects/Myart";

class HomeMobile extends Component {
    render() {
    return(
        <div id="megawrapmobile">
        <div id="headermobile">
 <div id="navbarwrapmobile">
     <div id="navbarmobile">
         <a id="homemobilelink" href="/">Home</a>
     </div>
     <div id="biocardmobile">
     <div id="paramobilewrap">
     <div id="headshotmobile" alt="Avatar"></div>
     <h1 id="skillstitle">Who am I?</h1>
     <p id="paramobile">Richard grew up in Texas during the dawn of the internet age. As a child he spent much time playing 32-bit games on the family's Windows 95 PC. In 6th grade he made his first website and worked to build a PC as part of a collaborative project with his schoolmates. He made personal use of Wordpress and Myspace as they arrived at that time. He particularly enjoyed designing personal layouts by playing with colors, fonts, and music. 
     </p><p id="paramobile">
     In High School Richard became a competitive online gamer. In college his focus turned towards the arts including acting, singing, playwriting, and painting. He graduated from the University of Maryland in 4 years, earning two degrees with a 3.4 gpa and 152 credit hours. He received a BA in Theatre and a BA in Classical Languages. After graduation, he moved back to Texas to Austin where he worked in administration for the state, pursuing artistic endeavors in his spare time. After 2 years he found a new opportunity of employment with a concrete manufacturer where, outside of the IT department, he was the only person in their local branch familiar with computers. This challenged him to master the use of various software where his technical skills served multiple departments. 
     </p><p id="paramobile">
     In 2020 like many, Richard was part of a mass layoff along with 11K+ other employees. Deciding to find a new career path, Richard combined his linguistic, artistic, and technical skills to become a fledgling, full-stack, web-developer in 2021 after graduating from Trilogy Education's Coding Bootcamp through the University of Texas at Austin.  </p>
     </div>
     </div>
 </div>

<p></p>
<div id="gluediv">
    <h1 id="skillstitle">What do I know?</h1>
     <div id="skillsmainwrapmobile">
       <div id="skillsmainmobile">
       <div id="skillblockmobile">
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

<div id="resumemoboileimp">
<div className="resumecontainermobile">
<h1 id="skillstitle">Where have I been?</h1>
<img className="resumingmobile" alt="resume" src={Resumeimg} />
</div>
</div>
<h1 id="skillstitle">What have I done?</h1>
<div id="cardsallmobile">
            <div className="inbetweenmodernl">
<Myart></Myart>
</div>
<div id="inbetweenmodernl">
<Arcadea></Arcadea>
</div>
<div id="inbetweenmodernr">
<Sellify></Sellify>
</div>
<div id="inbetweenmodernl">
<Empdir></Empdir>
</div>
<div id="inbetweenmodernr">
<Budtra></Budtra>
</div>
<div id="inbetweenmodernl">
<Fittra></Fittra>
</div>
<div id="inbetweenmodernr">
<Burgerhub></Burgerhub>
</div>
<div id="inbetweenmodernl">
<Survive></Survive>
</div>
<div id="inbetweenmodernr">
<Planner></Planner>
</div>
<div id="inbetweenmodernl">
<Notespage></Notespage>
</div>
<div id="inbetweenmodernr">
<Password></Password>
</div>
<div id="inbetweenmodernl">
<Book></Book>
</div>
<div id="inbetweenmodernr">
<Meta></Meta>
</div>
</div>

{/* 
<div id="contactmodernimp">
<Contact></Contact>
</div>

<div id="projectsmodernimp">
<Projects></Projects>
</div>
 */}

</div>
</div>
    )
}
}

export default HomeMobile