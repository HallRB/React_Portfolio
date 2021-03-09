import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import modernimp from "../Assetts/modern.wav";
import "../../App.css";
import { Button } from 'react-mdl';

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
            <Button key={index} id="modernida" onClick={() => this.Sound(soundObj.sound)}>Modern 
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
            

export default Modern