const { allTypeDefs } = require('./allTypeDefs');
const { PostTypes } = require('./schema/postTypes');

const typedef = [PostTypes, allTypeDefs];

module.exports = typedef;
