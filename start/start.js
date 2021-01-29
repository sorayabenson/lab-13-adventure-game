import { saveFormData } from '../utils.js';

const startButton = document.getElementById('start-quest');

startButton.addEventListener('click', () => {

    saveFormData();

    window.location = '../map/index.html';

});


/*
const radioInput = document.querySelectorAll('input[name="character"]');
const label = document.querySelectorAll('label');

function choiceHighlight(radio){
    const radioInput = document.querySelectorAll('input[name="character"]');
    for (let radio of radioInput) {
        radio.nextSibling.className = radio.checked ? 'chosen' : 'unchosen';
    }
}

for (let radio of radioInput) {
    radio.addEventListener('change', function(){
        choiceHighlight(this);
    });
}

if (radioInput.checked) {
   
}

for (let input of radioInput) {
    let selectedValue;
}

input[type='radio']:checked + label.character-label {
    background: white;
    color: rgb(121, 255, 210);
}*/