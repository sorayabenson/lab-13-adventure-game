import { findById } from './utils.js';

const dataKey = 'userData'; //key
const emptyData = [];

export function saveUserData(userData) {
    const stringUserData = JSON.stringify(userData);

    localStorage.setItem(dataKey, stringUserData);
}

export function getUserData() {
    const stringUserData = localStorage.getItem(dataKey);

    const parsedUserData = JSON.parse(stringUserData);

    return parsedUserData;
}
