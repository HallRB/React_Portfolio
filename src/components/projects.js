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
import {  Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import "../App.css";
class Projects extends Component {
    render() {
        return(

            <div id="projectwrap">
                <div className="headercss">
            <Header title="Richard B. Hall">
                <Navigation id="navbarwrap">
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/aboutme">About Me</Link>
                </Navigation>
            </Header>
            </div>
                Projects
            <div className="cardsall">
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
        )
    }
}
export default Projects