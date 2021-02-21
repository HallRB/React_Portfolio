import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import Classicimp from "../Assetts/classic.wav";
import "../../App.css";

const Music = [{sound: Classicimp}]

class Classic extends Component {

    Sound = (src) => {


        const sound = new Howl ({
            src})
            sound.play();        
    }

    Soundtwo = () => {
        return Music.map((soundObj, index) => {
        return (
            <button key={index} id="classicid" onClick={() => this.Sound(soundObj.sound)}> Classic
            </button>
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
            

export default Classic