var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = randomColor();
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = randomColor();
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";

})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//initial colors
	squares[i].style.backgroundColor = colors[i];

	//add click listeners
	squares[i].addEventListener("click", function () {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "CORRECT ! ! !";
			resetButton.textContent = "PLAY AGAIN";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else { 
			this.style.backgroundColor = "#232323";
		}

	})
}

function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function randomColor () {
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function randomColorGenerator() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}

function generateRandomColors (num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColorGenerator());
	}
	return arr;
}


 