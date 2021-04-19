import React, { Component } from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Image1 from "./Assetts/Myart.JPG";
import Image2 from "./Assetts/arcade.JPG";
import Image3 from "./Assetts/sellify.png";
import Image4 from "./Assetts/FitTra.JPG";
import Image5 from "./Assetts/EmpDir.JPG";
import Image6 from "./Assetts/BudTra.JPG";
import Image7 from "./Assetts/Burgerhub.JPG";
import Image8 from "./Assetts/SurvivePreview.JPG";
import Image9 from "./Assetts/PlannerPreview.JPG";
import Image10 from "./Assetts/PasswordPreview.JPG";
import Image11 from "./Assetts/bookreview.JPG";
import Image12 from "./Assetts/meta.JPG";
import Image13 from "./Assetts/Notespage.JPG";
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
      <img alt="budget tracker" src={Image3} />
      <img alt="burger hub" src={Image4} />
      <img alt="horiseon" src={Image5} />
      <img alt="budget tracker" src={Image6} />
      <img alt="burger hub" src={Image7} />
      <img alt="horiseon" src={Image8} />
      <img alt="budget tracker" src={Image9} />
      <img alt="burger hub" src={Image10} />
      <img alt="horiseon" src={Image11} />
      <img alt="horiseon" src={Image12} />
      <img alt="horiseon" src={Image13} />
    </Carousel>
  </div>
);
        }}

export default Carouselmod;