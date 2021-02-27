import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Synth from './homesynth';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import AboutMe from "./aboutme.js";

import HomeClassic from "./homeclassic.js";
import ResumeClassic from './resumeclassic.js';
import ProjectsClassic from './projectsclassic.js';
import ContactClassic from './contactclassic.js';
import AboutMeClassic from "./aboutmeclassic.js";

import HomeRetro from "./homeretro.js";
import ResumeRetro from './resumeretro.js';
import ProjectsRetro from './projectsretro.js';
import ContactRetro from './contactretro';
import AboutMeRetro from "./aboutmeretro.js";

import HomeSynthwave from "./Synth/homesynthwave.js";
import ResumeSynthwave from './resumesynthwave.js';
import ProjectsSynthwave from './projectssynthwave.js';
import ContactSynthwave from './contactsynthwave';
import AboutMeSynthwave from "./aboutmesynthwave.js";

// import HomeModern from "./Modern/homemodern.js";
// import ResumeModern from './resumemodern';
// import ProjectsModern from './projectsmodern';
// import ContactModern from './contactmodern';
// import AboutMeModern from "./aboutmemodern.js";

// import HomeMobile from "./Mobile/homemobile.js";
// import ResumeMobile from './resumemobile.js';
// import ProjectsMobile from './projectsmobile.js';
// import ContactMobile from './contactmobile.js';
// import AboutMeMobile from "./aboutmemobile.js";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/homeclassicview" component={HomeClassic} />
        <Route exact path="/homeretroview" component={HomeRetro} />
        <Route exact path="/homesynthwaveview" component={HomeSynthwave} />
        {/* <Route exact path="/homemobileview" component={HomeMobile} /> */}
        {/* <Route exact path="/homemoderneview" component={HomeModern} /> */}
        
        <Route path="/resume" component={Resume} />
        <Route path="/resumeclassicview" component={ResumeClassic} />
        <Route path="/resumeretroview" component={ResumeRetro} />
        <Route path="/resumesynthview" component={ResumeSynthwave} />
        {/* <Route path="/resumemobileview" component={ResumeMobile} /> */}
        {/* <Route path="/resumemodernview" component={ResumeModern} /> */}

        <Route path="/projects" component={Projects} />
        <Route path="/projectsclassicview" component={ProjectsClassic} />
        <Route path="/projectsretroview" component={ProjectsRetro} />
        <Route path="/projectssynthview" component={ProjectsSynthwave} />
        {/* <Route path="/projectsmobileview" component={ProjectsMobile} /> */}
        {/* <Route path="/projectsmodernview" component={ProjectsModern} /> */}

        <Route path="/contact" component={Contact} />
        <Route path="/contactclassicview" component={ContactClassic} />
        <Route path="/contactretroview" component={ContactRetro} />
        <Route path="/contactsynthview" component={ContactSynthwave} />
        {/* <Route path="/contactmobileview" component={ContactMobile} /> */}
        {/* <Route path="/contactmodernview" component={ContactModern} /> */}

        <Route path="/aboutme" component={AboutMe} />
        <Route path="/aboutmeclassicview" component={AboutMeClassic} />
        <Route path="/aboutmeretroview" component={AboutMeRetro} />
        <Route path="/aboutmesynthview" component={AboutMeSynthwave} />
        {/* <Route path="/aboutmemobileview" component={AboutMeMobile} /> */}
        {/* <Route path="/aboutmemodernview" component={AboutMeModern} /> */}
    </Switch>
)

export default Main;