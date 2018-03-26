/*
import { without } from 'lodash';
console.log(without); 
browserify script.js > bundle.js
*/
var _ = require('lodash');
var array = [1,2,3,4,5,6,7,8];
console.log('lodash answer', _.without(array, 3));
/* without method < give it array var, arguments = what you want it without */
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);