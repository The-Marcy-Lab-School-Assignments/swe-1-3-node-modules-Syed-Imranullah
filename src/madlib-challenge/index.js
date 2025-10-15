// TODO: Import prompt-sync and madlib.js
const prompt = require('prompt-sync')();
const madlib = require('./madlib.js'); // Import the function you just moved

// TODO: Move the madlib function to its own file: madlib.js

// TODO: Replace the hardcoded values with prompt calls
const profession = prompt('Choose a profession: ');
const name = prompt('Choose a name: ');
const verb = prompt('Choose a verb: ');
const pet = prompt('Choose a pet: ');

const storyContinuesResponse = prompt('Choose whether the story continues. Y or N: ');
const storyContinues = storyContinuesResponse.toUpperCase() === "Y";


main(madlib(profession, name, verb, pet, storyContinues));
