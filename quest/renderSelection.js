export function renderSelection(selection) {

    const div = document.createElement('div');
    div.classList.add('selection-div');

    const h3 = document.createElement('h3');
    h3.classList.add('ghost-name');
    h3.textContent = selection.title;
    div.append(h3);
                
    const img = document.createElement('img');
    img.classList.add('slection-image');
    img.src = `../assets/${selection.resultImage}`;
    img.alt = selection.title;
    div.append(img);

    const p = document.createElement('p');
    p.classList.add('ghost-description');
    p.textContent = selection.result;
    div.append(p);

    const resultsStats = document.createElement('p');
    resultsStats.textContent = `Light: ${selection.light},  Friendly Ghosts: ${selection.friendlyGhosts}`;
    div.append(resultsStats);

    return div;

}