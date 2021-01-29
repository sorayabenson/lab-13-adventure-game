import { getUserData } from '../localStorage-utils.js';

const currentUserData = getUserData();

export function renderMapLocations(location) {
    
    /*
        <a href="../quest/?id=" class="map-location">The Bedroom</a>
    */

    const a = document.createElement('a');
    a.textContent = location.title;
    a.href = `../quest/?id=${location.id}`;
    a.classList.add('map-location');
    a.id = 'location-link';
    if (currentUserData.completed[location.id] === true) {
        a.style.color = 'rgb(121, 255, 210)';
        a.classlist = 'disable';
        a.href = '#';
    }

    return a;

}