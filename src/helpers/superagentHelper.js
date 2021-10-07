const superagent = require('superagent'); // allows you to initialize the superagent object and then simplifies the work
const agent = superagent.agent();         // allows in tests to operate with several objects at the same time

module.exports = agent;
