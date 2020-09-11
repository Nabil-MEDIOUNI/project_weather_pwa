/* eslint-disable no-unused-expressions */

const { createWriteStream } = require('fs');
const path = require('path');

const User = "require('../../../models/user')";
const Post = "require('../../../models/post')";

const getArgumentInput = require('../../../helpers/getArgumentInput');

module.exports.PostMutations = {
  createPost: async (_, { userId, post, attachements }) => {
    const { createReadStream, filename, mimetype } = await attachements;

    attachements && await new Promise((res) => createReadStream()
      .pipe(createWriteStream(path.join(__dirname, '../../../../public', filename)))
      .on('close', res));

    const newPost = new Post({
      ...getArgumentInput(post),
      creator: userId,
      post_components: {
        component_attachment: {
          filename,
          filesize: getArgumentInput(post).size,
          type: `${mimetype.split('/')[0]}/${getArgumentInput(post).type}`,
        },
      },
    });

    try {
      await newPost.save();

      const creator = await User.findById(userId);
      const result = await Post.findById(newPost._id).populate('creator');

      if (!creator) {
        throw new Error('User not found.');
      }

      creator.createdPosts.push(newPost);
      await creator.save();
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
};
