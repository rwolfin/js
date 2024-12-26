const circle = document.querySelector('#circle');

function makeGreen() {
	circle.style.background = ('linear-gradient(90deg, #489900,#64b61a)');
	circle.removeEventListener('click', makeGreen);
	circle.addEventListener('click', makeYellow);
}

function makeYellow(){
	circle.style.background = ('linear-gradient(90deg, #db9d00,#ffbf00,#ffd53d)');
	circle.removeEventListener('click', makeYellow);
	circle.addEventListener('click', makeRed);
}

function makeRed(){
	circle.style.background = ('linear-gradient(90deg, #ff0000,#e82626,#ee4444,#ff7a7a)');
	circle.removeEventListener('click', makeRed);
	circle.addEventListener('click', makeGreen);
}


circle.addEventListener('click',makeGreen);