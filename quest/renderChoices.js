export function renderChoices(choices) {

    /*
        <label class="choices">
                                
            <h3 class="ghost-name">Opossum Ghost</h3>
            <img class="ghost-image" src="../assets/opossum-ghost.png" alt="opossum ghost">
            <p class="ghost-description">Find deep sleep after they teach you how to play dead!</p>

            <input type="radio">

        </label>
    */

    const label = document.createElement('label');
    label.classList.add('choices');

    const h3 = document.createElement('h3');
    h3.classList.add('ghost-name');
    h3.textContent = choices.title;
    label.append(h3);

    const img = document.createElement('img');
    img.classList.add('ghost-image');
    img.src = `../assets/${choices.image}`;
    img.alt = choices.title;
    label.append(img);

    const p = document.createElement('p');
    p.classList.add('ghost-description');
    p.textContent = choices.description;
    label.append(p);

    const input = document.createElement('input');
    input.type = 'radio';
    label.append(input);

    return label;

}