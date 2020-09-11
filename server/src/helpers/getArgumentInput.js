// transform the input to an object
module.exports = (inputName) => JSON.parse(JSON.stringify(inputName, null, 2));
