document.body.style.backgroundColor = "red" ;
document.body.getElementsByTagName('h1')[0].style.backgroundColor = "blue";
document.body.style.fontFamily = "sans-serif";
document.getElementById('nickname').innerHTML = "WisherBG";
document.getElementById('favorites').innerHTML = "LambdaSchool";
document.getElementById('hometown').innerHTML = "Somewhere there";
list = document.body.getElementsByTagName('li');
for (var i = list.length - 1; i >= 0; i--) {
	list[i].style.backgroundColor = "white";
	list[i].style.color = "red";
}
var myImage = document.createElement("img");
myImage.src = "https://qph.ec.quoracdn.net/main-qimg-c0f2e7c8e5fb40c52acd389e5de0d314"; 
document.body.appendChild(myImage);
