import quests from '../data.js';
import { getUserData } from '../localStorage-utils.js';
import { renderStats } from '../renderStats.js';
import { findById } from '../utils.js';
import { renderChoices } from './renderChoices.js';
import { renderQuest } from './renderQuest.js';

const statsDiv = document.getElementById('user-stats');
const questDiv = document.getElementById('quest');
const formWrapper = document.getElementById('form-wrapper');

const currentUserData = JSON.parse(getUserData('dataKey'));
const currentStats = renderStats(currentUserData);

const params = new URLSearchParams(window.location.search);
const questID = params.get('id');
const currentQuest = findById(questID, quests);

const renderedQuest = renderQuest(currentQuest);
const choices = currentQuest.choices;

if (!currentQuest) {window.location = '../map/.index.html';}

statsDiv.append(currentStats);

questDiv.append(renderedQuest);

for (let choice of choices) {
    const choiceElement = renderChoices(choice);

    formWrapper.append(choiceElement);
}