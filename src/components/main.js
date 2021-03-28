import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './landingpage';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import AboutMe from "./aboutme.js";

import HomeClassic from "./Classic/components/homeclassic.js";
import ResumeClassic from './Classic/components/resumeclassic.js';
import ProjectsClassic from './Classic/components/projectsclassic.js';
import ContactClassic from './Classic/components/contactclassic.js';
import AboutMeClassic from "./Classic/components/aboutmeclassic.js";

import HomeRetro from "./Retro/components/homeretro.js";
import ResumeRetro from './Retro/components/resumeretro.js';
import ProjectsRetro from './Retro/components/projectsretro.js';
import ContactRetro from './Retro/components/contactretro';
import AboutMeRetro from "./Retro/components/aboutmeretro.js";

import HomeSynth from "./Synth/components/homesynth.js";
import ResumeSynth from './Synth/components/resumesynth.js';
import ProjectsSynth from './Synth/components/projectssynth.js';
import ContactSynth from './Synth/components/contactsynth.js';
import AboutMeSynth from "./Synth/components/aboutmesynth.js";

import HomeModern from "./Modern/components/homemodern.js";
import ResumeModern from './Modern/components/resumemodern';
import ProjectsModern from './Modern/components/projectsmodern';
import ContactModern from './Modern/components/contactmodern';
import AboutMeModern from "./Modern/components/aboutmemodern.js";

import HomeMobile from "./Mobile/components/homemobile.js";
import ResumeMobile from './components/resumemobile.js';
import ProjectsMobile from './components/projectsmobile.js';
import ContactMobile from './components/contactmobile.js';
import AboutMeMobile from "./components/aboutmemobile.js";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/homeclassicview" component={HomeClassic} />
        <Route exact path="/homeretroview" component={HomeRetro} />
        <Route exact path="/homesynthview" component={HomeSynth} />
        <Route exact path="/homemobileview" component={HomeMobile} />
        <Route exact path="/homemodernview" component={HomeModern} />
        
        <Route path="/resume" component={Resume} />
        <Route path="/resumeclassicview" component={ResumeClassic} />
        <Route path="/resumeretroview" component={ResumeRetro} />
        <Route path="/resumesynthview" component={ResumeSynth} />
        <Route path="/resumemobileview" component={ResumeMobile} />
        <Route path="/resumemodernview" component={ResumeModern} />

        <Route path="/projects" component={Projects} />
        <Route path="/projectsclassicview" component={ProjectsClassic} />
        <Route path="/projectsretroview" component={ProjectsRetro} />
        <Route path="/projectssynthview" component={ProjectsSynth} />
        <Route path="/projectsmobileview" component={ProjectsMobile} />
        <Route path="/projectsmodernview" component={ProjectsModern} />

        <Route path="/contact" component={Contact} />
        <Route path="/contactclassicview" component={ContactClassic} />
        <Route path="/contactretroview" component={ContactRetro} />
        <Route path="/contactsynthview" component={ContactSynth} />
        <Route path="/contactmobileview" component={ContactMobile} />
        <Route path="/contactmodernview" component={ContactModern} />

        <Route path="/aboutme" component={AboutMe} />
        <Route path="/aboutmeclassicview" component={AboutMeClassic} />
        <Route path="/aboutmeretroview" component={AboutMeRetro} />
        <Route path="/aboutmesynthview" component={AboutMeSynth} />
        <Route path="/aboutmemobileview" component={AboutMeMobile} />
        <Route path="/aboutmemodernview" component={AboutMeModern} />
    </Switch>
)

export default Main;