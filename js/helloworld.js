var helloWorld = function(){
	var message = document.getElementById("helloWorld");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHelloWorld");
showHelloWorldButton.addEventListener("click", helloWorld);


var helloChiko = function(){
	var message = document.getElementById("helloChiko");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showhelloChiko");
showHelloWorldButton.addEventListener("click", helloChiko);