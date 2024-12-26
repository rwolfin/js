const itemPromt = document.querySelector ('#prompt');

itemPromt.addEventListener('click', (event) => {
event.preventDefault();

const itemAdd =	prompt('Введите текст чтобы изменить текст ссылки');
	if (itemAdd !== null){
		itemPromt.textContent = itemAdd
	}

})