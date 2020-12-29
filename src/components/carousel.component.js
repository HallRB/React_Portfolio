import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img alt="code" src="./Assetts/code1.JPG" />
                </div>                <div>
                    <img alt="code" src="./Assetts/code1.JPG" />
                </div>                <div>
                    <img alt="code" src="./Assetts/code1.JPG" />
                </div>                <div>
                    <img alt="code" src="./Assetts/code1.JPG" />
                </div>                <div>
                    <img alt="code" src="./Assetts/code1.JPG" />
                </div>                <div>
                    <img alt="code" src="./Assetts/code1.JPG" />
                </div>                <div>
                    <img alt="code" src="./Assetts/code1.JPG" />
                </div>                <div>
                    <img alt="code" src="./Assetts/code1.JPG" />
                </div>                <div>
                    <img alt="code" src="./Assetts/code1.JPG" />
                </div>                <div>
                    <img alt="code" src="./Assetts/code1.JPG" />
                </div>
            </Carousel>
        </div>
    );
}