export function renderMapLocations(location) {
    
    /*
        <a href="../quest/?id=">The Bedroom</a>
    */

    const a = document.createElement('a');
    a.textContent = location.title;
    a.href = '../quest/?id=';
    a.classList.add('map-location');

    return a;

}