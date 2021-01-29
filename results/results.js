import { renderStats } from '../renderStats.js';
import { getUserData, clearUserData } from '../localStorage-utils.js';
import { lightScore } from './light-score.js';
import { friendlyGhostScore } from './friendly-ghost-score.js';
import { lightMessages, friendlyGhostMessages } from './result-messages.js';

// DOM
const statsDiv = document.getElementById('user-stats');
const resultsDisplay = document.getElementById('result-wrapper');
const playAgainButton = document.getElementById('play-again');

// Setup
const currentUserData = getUserData('userData');
const currentStats = renderStats(currentUserData);

// render resultMessage
const lightResult = lightScore(currentUserData.light);
const ghostResult = friendlyGhostScore(currentUserData.friendlyGhosts);
const lightMessage = lightMessages[lightResult];
const ghostMessage = friendlyGhostMessages[ghostResult];
const resultMessage = `${lightMessage} ${ghostMessage}`;

const p = document.createElement('p');
p.classList.add('result-message');
p.textContent = resultMessage;
resultsDisplay.append(p);

// functions
statsDiv.append(currentStats);

playAgainButton.addEventListener('click', () => {

    clearUserData();

    window.location = '../start';
});

