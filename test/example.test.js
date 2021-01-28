import { saveFormData } from '../utils.js';
import { saveUserData, getUserData } from '../localStorage-utils.js';

const test = QUnit.test;

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
// test saveUserData
test('should take in data from form and save to local storage with an empty array and starting stats', (expect) => {
   
    const form = {
        name: 'soraya',
        character: 'underestimated',
    };

    const expected = {        
        name: 'soraya',
        character: 'underestimated',
        light: 25,
        friendlyGhosts: 0,
        completed: {},
    };
    
    const actual = saveFormData(form);

    expect.equal(actual, expected);
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
