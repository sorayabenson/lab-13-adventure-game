// render resultMessage
import { getUserData } from '../localStorage-utils.js';
import { lightScore } from './light-score.js';
import { friendlyGhostScore } from './friendly-ghost-score.js';
import { lightMessages, friendlyGhostMessages } from './result-messages.js';

const currentUserData = getUserData('userData');
const lightResult = lightScore(currentUserData.light);
const ghostResult = friendlyGhostScore(currentUserData.friendlyGhosts);

const lightMessage = lightMessages[lightResult];
const ghostMessage = friendlyGhostMessages[ghostResult];
const resultMessageString = `${lightMessage} ${ghostMessage}`;

export function resultImages(ghost) {

    const ghostImg = document.createElement('img');
    ghostImg.classList.add('result-ghost');
    ghostImg.src = `../assets/${ghost.finalImage}`;
    ghostImg.alt = ghost.title;

    return ghostImg;
}

export function resultMessage() {
    
    const p = document.createElement('p');
    p.classList.add('result-message');
    p.textContent = resultMessageString;
    
    return p;
}

// if ghosts = true return ghosts.finalImage