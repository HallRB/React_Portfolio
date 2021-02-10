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
<div class="inbetween">
<Arcadea></Arcadea>
</div>
<div class="inbetween">
<Sellify></Sellify>
</div>
<div class="inbetween">
<Empdir></Empdir>
</div>
<div class="inbetween">
<Budtra></Budtra>
</div>
<div class="inbetween">
<Fittra></Fittra>
</div>
<div class="inbetween">
<Burgerhub></Burgerhub>
</div>
<div class="inbetween">
<Survive></Survive>
</div>
<div class="inbetween">
<Planner></Planner>
</div>
<div class="inbetween">
<Notespage></Notespage>
</div>
<div class="inbetween">
<Password></Password>
</div>
<div class="inbetween">
<Horiseon></Horiseon>
</div>
<div class="inbetween">
<Book></Book>
</div>
<div class="inbetween">
<Meta></Meta>
</div>
</div>
</div>
        )
    }
}
export default Projects