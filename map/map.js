import quests from '../data.js';
import { getUserData } from '../localStorage-utils.js';
import { renderMapLocations } from './renderMapLocations.js';
import { renderStats } from '../renderStats.js';

const statsDiv = document.getElementById('user-stats');
const map = document.getElementById('map-locations');

const currentUserData = getUserData('userData');
const currentStats = renderStats(currentUserData);

let completedAllquests = true;

for (let quest of quests) {

    if (!currentUserData.completed[quest.id]) {
        completedAllquests = false;
    }
}

if (completedAllquests || currentUserData.light <= 0) {

    window.location = '../results/index.html';
}

for (let quest of quests) {
    const questLocation = renderMapLocations(quest);

    map.append(questLocation);

}

statsDiv.append(currentStats);