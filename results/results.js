import { renderStats } from '../renderStats.js';
import { getUserData, clearUserData } from '../localStorage-utils.js';
import { resultImages, resultMessage } from './render-results.js';

// DOM
const statsDiv = document.getElementById('user-stats');
const resultsDisplay = document.getElementById('result-wrapper');
const ghostDisplay = document.getElementById('ghost-wrapper');
const playAgainButton = document.getElementById('play-again');

// Setup
const currentUserData = getUserData('userData');
const currentStats = renderStats(currentUserData);
const finalGhost = currentUserData.ghosts;
const finalMessage = resultMessage();

// functions
statsDiv.append(currentStats);
resultsDisplay.append(finalMessage);

/*for (let ghost of finalGhost) {
    const ghostBabe = resultImages(ghost);

    ghostDisplay.append(ghostBabe);
}*/

playAgainButton.addEventListener('click', () => {

    clearUserData();

    window.location = '../start';
});

