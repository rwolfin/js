const inputText = document.querySelector('#text');
const btnSubmit = document.querySelector('#button');
const imputResults = document.querySelector('#duplicateField'); 

inputText.addEventListener('input', () => {
    imputResults.textContent = inputText.value; 
});

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(inputText.value);
    inputText.value = '';
    imputResults.textContent = ''; 
	alert('Ваши данные успешно добавлены в консоль браузера !');
});


