import React, { Component } from 'react';
import "./projectsmodern.css";
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
            <div id="cardsallmodern">
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
</div>
        )
    }
}
export default Projects