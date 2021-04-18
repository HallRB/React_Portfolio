import React, { Component } from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Image1 from "./Assetts/BudTra.JPG";
import Image2 from "./Assetts/Burgerhub.JPG";
import Image3 from "./Assetts/HoriseonPreview.JPG";

class Carouselmod extends Component {
    render() {
        return(
  <div
    className="App"
    style={{ width: "600px", margin: "auto", padding: "50px" }}
  >
    <Carousel arrows infinite>
      <img alt="budget tracker" src={Image1} />
      <img alt="burger hub" src={Image2} />
      <img alt="horiseon" src={Image3} />
    </Carousel>
  </div>
);
        }}

export default Carouselmod;