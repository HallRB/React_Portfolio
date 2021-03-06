import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import Classicimp from "../Assetts/classic.wav";
import "../../App.css";
import { Button } from 'react-mdl';

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
            <Button key={index} id="classicida" onClick={() => this.Sound(soundObj.sound)}> Classic
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
            

export default Classic