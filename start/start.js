import { saveFormData } from '../utils.js';

const startButton = document.getElementById('start-quest');

startButton.addEventListener('click', () => {

    saveFormData();

    window.location = '../map/index.html';

});