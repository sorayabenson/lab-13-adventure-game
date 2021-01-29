export function renderQuest(quest) {
    
    /*
        <div class="quest-wrapper"></div>
            <h2 class="quest-title">The Bedroom</h2>
            <!--<img src="http://placekitten.com/g/600/600" alt="bedroom quest">-->
            <p class="quest-description">You seek rest but only find insomnia, who do you ask for help?</p>
        </div>
    */
    
    const div = document.createElement('div');
    div.classList.add('quest-wrapper');

    const h2 = document.createElement('h2');
    h2.classList.add('quest-title');
    h2.textContent = quest.title;
    div.append(h2);

    /*
    const img = document.createElement('img');
    img.classList.add('quest-image');
    img.src = `../assets/${quest.image}`;
    img.alt = `${quest.title} Quest`;
    div.append(img);
    */
   
    const p = document.createElement('p');
    p.classList.add('quest-description');
    p.textContent = quest.description;
    div.append(p);

    return div;
    
}