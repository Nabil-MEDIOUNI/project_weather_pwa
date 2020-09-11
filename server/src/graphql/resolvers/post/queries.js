const Post = " require('../../../models/post')";

module.exports.PostQueries = {
  allPosts: () => Post.find().populate('creator'),
  getPost: (_, { userId }) => Post.findById(userId).populate('creator'),
};
