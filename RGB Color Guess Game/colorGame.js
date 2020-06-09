var numSquares=6;

var colors=generateRandomColors(numSquares);
var easyBtn=document.querySelector("#easyBtn")
var hardBtn=document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected")
	easyBtn.classList.add("selected")
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none"
		}
	}

	
})
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected")
	hardBtn.classList.add("selected")
	numSquares=6
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
			squares[i].style.background=colors[i];
			squares[i].style.display="block"
	}
})




var h1=document.querySelector("h1");


var messageDisplay=document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var resetButton=document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick new random colors
	pickedColor=pickColor();
	//change color display to match picked color
	colorDisplay.textContent=pickedColor
	this.textContent="New Colors";
	messageDisplay.textContent="";
	//change colors of squares
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i]
	}
	h1.style.background="steelblue"
})


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent="Correct!"
			changeColors(clickedColor)
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again?"
			
		} else {
			this.style.background="transparent"
			messageDisplay.textContent="Try Again"
		}
	});
}






function changeColors(color){
	//loop thru all squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function pickColor(){
	//pick a random number using math.random
	var random = Math.floor(Math.random()*colors.length)
	return colors[random]
	//use that np acces color
}


function generateRandomColors(num){
	//make an array
	var arr=[];

	//repeat num times
	for(var i=0;i<num;i++){
		//get the random colors and push into array
		arr.push(randomColor()); 


	}
	// return
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random()*256)
	//pick a green from 0 to 255
	var g = Math.floor(Math.random()*256)
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random()*256)
	return "rgb(" + r + ", " + g + ", " +b+")";

}