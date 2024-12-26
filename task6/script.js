const circles = document.querySelectorAll('.circle');
let activeCircleIndex = 0; 

const colors = {
    red: 'linear-gradient(90deg, #ff0000,#e82626,#ee4444,#ff7a7a)',
    yellow: 'linear-gradient(90deg, #db9d00,#ffbf00,#ffd53d)',
    green: 'linear-gradient(90deg, #489900,#64b61a)',
};

function setBlack(circle) {
    circle.style.background = 'black';
}

function handleClick() {
    circles.forEach(setBlack);
    
    const activeCircle = circles[activeCircleIndex];

    if (activeCircle.id === "circle-red") {
        activeCircle.style.background = colors.red;
    } 
	
	else if (activeCircle.id === "circle-yellow") {
        activeCircle.style.background = colors.yellow;
    }

	else if (activeCircle.id === "circle-green") {
        activeCircle.style.background = colors.green;
    }

    activeCircleIndex = (activeCircleIndex + 1) % circles.length;
}


circles.forEach(circle => {
   circle.addEventListener('click', handleClick);
});