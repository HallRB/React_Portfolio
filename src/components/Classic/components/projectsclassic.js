import React, { Component } from 'react';
import "./projects.css";
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
import "../App.css";
import { Link } from 'react-router-dom';
class Projects extends Component {
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
             <p id="homeclassic" class="linksclassic"><Link class="links" id="homeclassic" to="/"></Link></p>
             <p id="resumeclassic" class="linksclassic"><Link class="links" id="resumeclassic" to="/resumeclassicview"></Link></p>
             <p id="projectsclassic" class="linksclassic"><Link class="links" id="projectsclassic" to="/projectsclassicview"></Link></p>
             <p id="contactclassic" class="linksclassic"><Link class="links" id="contactclassic" to="/contactclassicview"></Link></p>
             <p id="aboutmeclassic" class="linksclassic"><Link class="links" id="aboutmeclassic" to="/aboutmeclassicview"></Link></p>
             </div>
</div>
            <div id="projectwrap">
                Projects
            <div id="cardsall">
<div className="inbetween">
<Arcadea></Arcadea>
</div>
<div className="inbetween">
<Sellify></Sellify>
</div>
<div className="inbetween">
<Empdir></Empdir>
</div>
<div className="inbetween">
<Budtra></Budtra>
</div>
<div className="inbetween">
<Fittra></Fittra>
</div>
<div className="inbetween">
<Burgerhub></Burgerhub>
</div>
<div className="inbetween">
<Survive></Survive>
</div>
<div className="inbetween">
<Planner></Planner>
</div>
<div className="inbetween">
<Notespage></Notespage>
</div>
<div className="inbetween">
<Password></Password>
</div>
<div className="inbetween">
<Book></Book>
</div>
<div className="inbetween">
<Meta></Meta>
</div>
</div>
</div>
</div>
        )
    }
}
export default Projects