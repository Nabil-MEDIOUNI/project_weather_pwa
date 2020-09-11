const { gql } = require('apollo-server-express');

module.exports.allTypeDefs = gql`
  type Query {
    # related to posts
    allPosts: [Post]
    getPost(userId: ID!): Post
  }

  type Mutation {
    # related to posts
    createPost(userId: ID!, post: PostInput, attachements: Upload): Post
  }
`;
