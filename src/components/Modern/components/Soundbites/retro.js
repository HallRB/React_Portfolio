import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import retroimp from "../Assetts/retro.wav";
import "../../App.css";
import { Button } from 'react-mdl';

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
            <Button key={index} id="retroida" onClick={() => this.Sound(soundObj.sound)}> Retro
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
            

export default Retro