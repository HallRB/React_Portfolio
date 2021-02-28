import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import Synthimp from "../Assetts/synth.wav";
import "../../App.css";
import { Button } from 'react-mdl';

const Music = [{sound: Synthimp}]

class Synth extends Component {

    Sound = (src) => {


        const sound = new Howl ({
            src})
            sound.play();        
    }

    Soundtwo = () => {
        return Music.map((soundObj, index) => {
        return (
            <Button key={index} id="synthida" onClick={() => this.Sound(soundObj.sound)}> Synthwave
            </Button>
        )
        })
    }
    render() {
        Howler.volume(0.1)
        return <div className="viewexp">
        {this.Soundtwo()}
        </div>
    }
}
            

export default Synth