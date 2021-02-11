import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './landingpage';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import AboutMe from "./aboutme.js";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/aboutme" component={AboutMe} />
    </Switch>
)

export default Main;