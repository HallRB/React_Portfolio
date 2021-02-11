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
import Horiseon from "./Projects/Horiseon";
import Book from "./Projects/Book";
import Meta from "./Projects/Meta";
import Sellify from "./Projects/sellify";
import Arcadea from "./Projects/arcadeutopia";
class Projects extends Component {
    render() {
        return(

            <div id="projectwrap">
                Projects
            <div class="cardsall">
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
<Horiseon></Horiseon>
</div>
<div className="inbetween">
<Book></Book>
</div>
<div className="inbetween">
<Meta></Meta>
</div>
</div>
</div>
        )
    }
}
export default Projects