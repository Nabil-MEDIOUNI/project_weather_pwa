const { PostQueries } = require('./post/queries');
const { PostMutations } = require('./post/mutations');

const resolvers = {
  Query: {
    ...PostQueries,
  },
  Mutation: {
    ...PostMutations,
  },
};

module.exports = resolvers;
