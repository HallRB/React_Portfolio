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
import Myart from "./Projects/Myart";
import "../App.css";
import { Link } from 'react-router-dom';


    class Projects extends Component {
    constructor(props) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
    }
    


    sayHello() {
        document.getElementById("cardsallretro").style.filter = "invert(100%)";
        setTimeout(this.sayHello2, 100);
    }
    sayHello2() {
        document.getElementById("cardsallretro").style.filter = "invert(0%)";
        setTimeout(this.scoreclick, 10);
    }

    scoreclick () {
        var clicks = 0;
        clicks += 1;
        document.getElementById("score").innerHTML = clicks;
        alert("success");
    }

    render() {
      
        return(
            <div id="megawrapretro">
 <div id="lpiwretro">
         Richard B. Hall
             <div id="lpiwretroinner">
             </div>
</div>
<div id="webbaroutretro">
    <div id="webbarinretro">
             <p id="homeretro" class="linksretro"><Link class="links" id="homeretro" to="/"></Link></p>
             <p id="resumeretro" class="linksretro"><Link class="links" id="resumeretro" to="/resumeretroview"></Link></p>
             <p id="projectsretro" class="linksretro"><Link class="links" id="projectsretro" to="/projectsretroview"></Link></p>
             <p id="contactretro" class="linksretro"><Link class="links" id="contactretro" to="/contactretroview"></Link></p>
             <p id="aboutmeretro" class="linksretro"><Link class="links" id="aboutmeretro" to="/aboutmeretroview"></Link></p>
             </div>
</div>
            <div id="projectwrapretro">
<p >Hello World<div id="score"></div></p>
            <div id="cardsallretro" onClick={this.sayHello}>
<div className="inbetween">
<Myart></Myart>
</div>
<div className="inbetween">
<Arcadea></Arcadea>
</div>
<div className="inbetween">
<Sellify></Sellify>
</div>
<div className="inbetween">
<Book></Book>
</div>
<div className="inbetween">
<Meta></Meta>
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
</div>
</div>
</div>
        )
    }
}
export default Projects