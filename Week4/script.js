
let div = document.getElementsByTagName("div")[0]
setTimeout(baNNer, 500)

function baNNer (){
	div.classList.toggle("banner")
}
let idInterval;
let span = document.getElementsByTagName("span")[0]

idInterval=setInterval(countdown,1000)

counter = 10
function countdown () {		
	if(counter==0){
		clearInterval(idInterval)
	} else {
	counter --;
	span.textContent = counter;
	
	}
}