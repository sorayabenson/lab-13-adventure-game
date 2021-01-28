export function renderMapLocations(location) {
    
    /*
        <a href="../quest/?id=" class="map-location">The Bedroom</a>
    */

    const a = document.createElement('a');
    a.textContent = location.title;
    a.href = `../quest/?id=${location.id}`;
    a.classList.add('map-location');

    return a;

}