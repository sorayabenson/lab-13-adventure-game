//import { findById } from './utils.js';

const dataKey = 'userData'; //key
//const emptyData = [];

export function saveUserData(userData) {
    const stringUserData = JSON.stringify(userData);

    localStorage.setItem(dataKey, stringUserData);
}

export function getUserData() {
    const stringUserData = localStorage.getItem(dataKey);
    const parsedUserData = JSON.parse(stringUserData);
    
    return parsedUserData;
}

/*
export function addUserData(id, completed) {

    const formData = new FormData(form);



    // get current data
    const currentUserData = getUserData();
    const choice = findById(currentUserData, id);
    const addCompleted = completed;

    choice.




        - Get current data
        -  
        - push new data to local storage

};*/