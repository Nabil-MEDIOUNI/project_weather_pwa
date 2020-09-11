const { gql } = require('apollo-server-express');

module.exports.PostTypes = gql`
  type Post {
    id: ID
    title: String
    description: String
    createdAt: String
    post_components: [PostComponent]
  }
  
  type PostComponent {
    component_attachment: Attachement
    content: String
    content_type: String
  }
  type Attachement {
    filename: String
    filesize: String
    type: String
  }

  input PostInput {
    title: String
    description: String
    size: Int
    type: String
  }

`;
