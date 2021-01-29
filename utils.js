import { saveUserData } from './localStorage-utils.js';

const form = document.querySelector('form');

export function findById(array, id){
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function saveFormData() {
    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        light: 25,
        friendlyGhosts: 0,
        completed: {},
    };

    saveUserData(user);

}

