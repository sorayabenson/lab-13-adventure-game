import quests from '../data.js';
import { getUserData, saveUserData } from '../localStorage-utils.js';
import { renderStats } from '../renderStats.js';
import { findById } from '../utils.js';
import { renderChoices } from './renderChoices.js';
import { renderQuest } from './renderQuest.js';

// DOM elements
const statsDiv = document.getElementById('user-stats');
const questDiv = document.getElementById('quest');
const form = document.getElementById('form');
const playButton = document.getElementById('submit');
const resultsWrapper = document.getElementById('form-results-wrapper');
const backToMapButton = document.getElementById('back-to-map');

// setting up consts for functions
const currentUserData = getUserData('userData');
const currentStats = renderStats(currentUserData);

const params = new URLSearchParams(window.location.search);
const questID = params.get('id');
const currentQuest = findById(quests, questID);

const renderedQuest = renderQuest(currentQuest);
const choices = currentQuest.choices;

// functions
if (!currentQuest) {window.location = '../map/.index.html';}

statsDiv.append(currentStats);

questDiv.append(renderedQuest);

for (let choice of choices) {
    const choiceElement = renderChoices(choice);

    form.append(choiceElement);
}

playButton.addEventListener('click', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const selectionId = formData.get('choices');
    const choice = findById(currentQuest.choices, selectionId);

    currentUserData.light += choice.light;
    currentUserData.friendlyGhosts += choice.friendlyGhosts;
    currentUserData.completed[questID] = true;

    saveUserData(currentUserData);

    resultsWrapper.textContent = '';

    const consequencesDiv = document.createElement('div');

    const resultsMessage = document.createElement('p');
    resultsMessage.textContent = choice.result;
    consequencesDiv.append(resultsMessage);

    const resultsStats = document.createElement('p');
    resultsStats.textContent = `Light: ${choice.light},  Friendly Ghosts: ${choice.friendlyGhosts}`;
    consequencesDiv.append(resultsStats);
    
    resultsWrapper.append(consequencesDiv);

    playButton.style.display = 'none';
    backToMapButton.style.display = 'block';
    
});

backToMapButton.addEventListener('click', () => {

    window.location = '../map/index.html';
});