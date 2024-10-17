const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45; 
const len = lists.length - 1;
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audio = frame.querySelectorAll("audio");
let i = 0;
let num = 0;
let active = 0;

function activation(index, lists){
	for(let el of lists){
		el.classList.remove("on");
	}
	lists[index].classList.add("on");
}

for (let el of lists) {
	let pic = el.querySelector(".pic");
	
    el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
	pic.style.backgroundImage = `url(img/member${i+1}.jpg)`;
    i++;
	
	let play = el.querySelector(".play");
	let pause = el.querySelector(".pause");
	let load = el.querySelector(".load");
	
	//play 버튼
	play.addEventListener("click", e=>{
		let isActive = e.currentTarget.closest("article").classList.contains("on");
		if(isActive){
			e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
			e.currentTarget.closest("article").querySelector("audio").play();
		}
	});
	
	//pause 버튼
	pause.addEventListener("click", e=>{
		let isActive = e.currentTarget.closest("article").classList.contains("on");
		if(isActive){
			e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
			e.currentTarget.closest("article").querySelector("audio").pause();
		}
	});
	
	//load 버튼
	load.addEventListener("click", e=> {
		let isActive = e.currentTarget.closest("article").classList.contains("on");
		if(isActive){
			e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
			e.currentTarget.closest("article").querySelector("audio").load();
			e.currentTarget.closest("article").querySelector("audio").play();
		}
	});
 }
 

 function initMusic(){
 	for(let el of audio){
 		el.pause();
 		el.load();
 		el.closest("article").querySelector(".pic").classList.remove("on");
 	}
 }
 
 prev.addEventListener("click", ()=>{
	initMusic();
 	num++;
 	frame.style.transform = `rotate(${deg * num}deg)`;
	(active == 0) ? active = len : active--;
	activation(active, lists);
 });
 	
 next.addEventListener("click", ()=>{
	initMusic();
 	num--;
 	frame.style.transform = `rotate(${deg * num}deg)`;
	(active == len) ? active = 0 : active++;
	activation(active, lists);
 });