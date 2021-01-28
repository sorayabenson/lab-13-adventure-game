import { saveFormData } from '../utils.js';
import { saveUserData, getUserData } from '../localStorage-utils.js';
import { renderMapLocations } from '../map/renderMapLocations.js';
import { renderStats } from '../renderStats.js';

const test = QUnit.test;

// renderStats test
test('should take in userData and return current stats of light and friendly ghosts', (expect) => {

    const userData = {
        name: 'soraya',
        character: 'underestimated',
        light:25,
        friendlyGhosts:0,
        completed:{}
    };

    const expected = `<h6 class="user-stats">Light: 25, Friendly Ghosts: 0</h6>`;
    
    const actual = renderStats(userData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

// renderMapLocations test
test('should take in quest and return a element', (expect) => {
    
    const quest = {
        id: 'bedroom',
        title: 'The Bedroom',
        /*map: {
            top: ,
            left: ,
        },*/
        image: 'bedroom.png',
        description: `You seek rest but only find insomnia, who do you ask for help?`,
        choices: [{
            id: 'opossum',
            title: 'Opossum Ghost',
            image: 'opossum-ghost.png',
            description: `Find deep sleep after they teach you how to play dead!`,
            result: `Your eyes can finally stay shut until morning.`,
            light: 10,
            friendlyGhosts: 1,
        }, {
            id: 'blanket',
            title: 'Blanket Ghost',
            image: 'blanket-ghost.png',
            description: `Get wrapped up in a weighted blanket like no other.`,
            result: `You fall into a deep slumber that you haven’t known in years.`,
            light: 30,
            friendlyGhosts: 5,
        }, {
            id: 'screen',
            title: 'Screen Ghost',
            image: 'screen-ghost.png',
            description: `Turn off your brain and turn on that screen.`,
            result: `Oh no, it’s the Endless Scroll Shapeshifter! They’ve trapped you in an endless loop of doom scrolling and steal the little peace you had!`,
            light: -20,
            friendlyGhosts: -3,
        }]
    };

    const expected = `<a href="../quest/?id=" class="map-location">The Bedroom</a>`;
    
    const actual = renderMapLocations(quest);

    expect.equal(actual.outerHTML, expected);
});

// saveUserData test
test('should take user data and push to localStorage', (expect) => {

    const userData = {        
        name: 'soraya',
        character: 'underestimated',
        light: 25,
        friendlyGhosts: 0,
        completed: {},
    };
    const stringUserData = JSON.stringify(userData);

    const expected = localStorage.setItem('dataKey', stringUserData);
    
    const actual = saveUserData(userData);

    expect.deepEqual(actual, expected);

});

// getUserData test
test('should get user data from localStorage', (expect) => {

    const userData = {        
        name: 'soraya',
        character: 'underestimated',
        light: 25,
        friendlyGhosts: 0,
        completed: {},
    };
    const stringUserData = JSON.stringify(userData);
    localStorage.setItem('dataKey', stringUserData);
    
    const expected = {        
        name: 'soraya',
        character: 'underestimated',
        light: 25,
        friendlyGhosts: 0,
        completed: {},
    };
    
    const actual = getUserData();

    expect.deepEqual(actual, expected);

});

/*
// test saveFormData
test('should take in data from form and save to local storage with an empty array and starting stats', (expect) => {
   
    const form = new FormData();
    form.append('name', 'soraya');
    form.append('character', 'underestimated');
    saveUserData(form);
    const stringUserData = localStorage.getItem('dataKey');
    const parsedUserData = JSON.parse(stringUserData);

    const expected = {        
        name: 'soraya',
        character: 'underestimated',
        light: 25,
        friendlyGhosts: 0,
        completed: {},
    };
    
    const actual = saveFormData(stringUserData);

    expect.deepEqual(actual, expected);
});
*/


/*
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
*/
