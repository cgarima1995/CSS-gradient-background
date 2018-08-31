var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var  a = document.getElementById("para");


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value	+ ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
	a.innerHTML = "The code of the color in your left is <strong>" + color1.value + "</strong> . "+
	"The code of the color in your right is <strong>" + color2.value + " </strong> ." ;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);