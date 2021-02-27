import React, { Component } from 'react';
import "../App.css";



class Canvas extends Component {
    render() {
    return(

    <div id="canvas">
var canvas = width:300, height:300 ;
var score = 0;

var player = {
	x:canvas.width/2,
	y:canvas.height-100,
	speed: 3
};

var LEFT = false; 
var RIGHT = false;


function move() {
	
	if(LEFT) { 
		player.x -= player.speed;
	}
	if(RIGHT) {
		player.x += player.speed;	
	}
	
}

document.onkeydown = function(e) {
	if(e.keyCode == 37) LEFT = true;
	if(e.keyCode == 39) RIGHT = true;
}

document.onkeyup = function(e) {
	if(e.keyCode == 37) LEFT = false;
	if(e.keyCode == 39) RIGHT = false;
}


function clearCanvas() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
}

function ship(x,y) {
	var x = player.x;
	var y = player.y;
	ctx.fillStyle = "#FFFFFF";

	ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+15,y+50);
    ctx.lineTo(x-15,y+50);
    ctx.fill();
}


setInterval (update, 10);

function update() {
	clearCanvas();
	ship();
    move();


}
</div>
        )
    }
}
export default Canvas