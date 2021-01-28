import { getUserData } from '../localStorage-utils.js';
import quests from '../data.js';
import { renderStats } from '../renderStats.js';

const statsDiv = document.getElementById('user-stats');

const currentUserData = JSON.parse(getUserData('dataKey'));
const currentStats = renderStats(currentUserData);

const params = new URLSearchParams(window.location.search);
const questID = params.get('id');

statsDiv.append(currentStats);