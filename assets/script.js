const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let index = 0;
console.log(slides.length);
let arrow_left= document.querySelector(".arrow_left");
console.log(arrow_left);
arrow_left.addEventListener("click",function(){
	 index = index -1;
	 tame(index)
});
console.log(slides.length);
let arrow_right= document.querySelector(".arrow_right");
console.log(arrow_right);
arrow_right.addEventListener("click",function(){
	 index = index +1;
	 tame(index)
})
for(let i=0; i< slides.length; i++){
	console.log(slides[i].tagLine)

	let tictac =document.querySelector('.dots')
	let bad = document.createElement("span")
	bad.classList.add("dot")
	tictac.innerHTML+=bad.outerHTML
	  
}
function tame(i) {
	if(i<0) {i = slides.length-1;
	index=i;}else if(i>slides.length-1) {i = 0;
		index=i;}
	const imageElement = document.querySelector("img.banner-img");
	imageElement.src = "./assets/images/slideshow/"+ slides[i].image;
	let tagLine = document.querySelector("#banner p");
	tagLine.innerHTML =slides[i].tagLine;
	
	let dotselected = document.querySelector(".dot_selected");
	if( dotselected){
	dotselected.classList.remove("dot_selected")
	}
	let dots = document.querySelectorAll(".dot");
	for (let j=0; j< dots.length; j++) {
     if(i==j){dots[j].classList.add("dot_selected");

	 }
	}
}


 tame(index);

	const boutonTrier = document.querySelectorAll(".dot");
	for (let i=0; i< boutonTrier.length; i++) {
	
	boutonTrier[i].addEventListener("click", function () {
		tame(i)
	 
	})
 }