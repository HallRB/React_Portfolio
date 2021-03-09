import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import mobileimp from "../Assetts/mobile.mp3";
import "../../App.css";
import { Button } from 'react-mdl';

const Music = [{sound: mobileimp}]

class Mobile extends Component {

    Sound = (src) => {


        const sound = new Howl ({
            src})
            sound.play();        
    }

    Soundtwo = () => {
        return Music.map((soundObj, index) => {
        return (
            <Button key={index} id="mobileida" onClick={() => this.Sound(soundObj.sound)}> Smart Phone
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
            

export default Mobile