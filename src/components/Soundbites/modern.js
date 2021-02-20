import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import modernimp from "../Assetts/modern.wav";
import "../../App.css";

const Music = [{sound: modernimp}]

class Modern extends Component {

    Sound = (src) => {


        const sound = new Howl ({
            src})
            sound.play();        
    }

    Soundtwo = () => {
        return Music.map((soundObj, index) => {
        return (
            <button key={index} id="modernid" onClick={() => this.Sound(soundObj.sound)}>Modern 
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
            

export default Modern