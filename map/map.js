/*     
    //- If all quests complete redirect to results page
    //- If hp is <= 0 redirect to results page

    //- Else render map with quests

        a.href = '../quest/?id=' + 

    - update user stats

*/
import { getUserData } from '../localStorage-utils.js';
import quests from '../data.js';
import { renderMapLocations } from './renderMapLocations.js';
import { renderStats } from '../renderStats.js';

const statsDiv = document.getElementById('user-stats');
const map = document.getElementById('map-locations');

const currentUserData = JSON.parse(getUserData('dataKey'));
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