
const itemClass = document.querySelector ('#consoleLog');

itemClass.addEventListener('click', () => {
alert('Это сообщение для вывода информации в консоль');
	
})


const item2Class = document.querySelector('#alert');

item2Class.addEventListener('click', () =>{
	alert('Это сообщение выводит в стандартном модальном окне браузера');
})



const item3Class = document.querySelector('#prompt');

item3Class.addEventListener('click', () =>{
	let name = prompt('Введите ваше имя:');
	alert(`Привет, ${name}!`);

})