import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import Synthimp from "../Assetts/synth.wav";
import "../../App.css";

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
            <button key={index} id="synthid" onClick={() => this.Sound(soundObj.sound)}> Synthwave
            </button>
        )
        })
    }
    render() {
        Howler.volume(1.0)
        return <div className="viewexp">
        {this.Soundtwo()}
        </div>
    }
}
            

export default Synth