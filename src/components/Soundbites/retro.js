import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import retroimp from "../Assetts/retro.wav";
import "../../App.css";

const Music = [{sound: retroimp}]

class Retro extends Component {

    Sound = (src) => {


        const sound = new Howl ({
            src})
            sound.play();        
    }

    Soundtwo = () => {
        return Music.map((soundObj, index) => {
        return (
            <button key={index} id="retroid" onClick={() => this.Sound(soundObj.sound)}> 
            </button>
        )
        })
    }
    render() {
        Howler.volume(1.0)
        return <div className="retroclass">
        {this.Soundtwo()}
        </div>
    }
}
            

export default Retro