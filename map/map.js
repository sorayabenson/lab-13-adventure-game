/*     
    - If all quests complete redirect to results page
    - If hp is <= 0 redirect to results page

    - Else render map with quests

        a.href = '../quest/?id=' + 

    - update user stats

*/

import { renderStats } from '../renderStats,js';
import { renderMapLocations } from './renderMapLocations.js';
import { quests } from '../data.js';
import { getUserData } from '../localStorage-utils.js';

const currentUserData = JSON.parse(getUserData('dataKey'));
const map = document.getElementById('map-locations');

for (let quest of quests) {
    const questLocation = renderMapLocations(quest);

    map.append(questLocation);
}
