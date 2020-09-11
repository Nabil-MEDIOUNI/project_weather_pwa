const jwt = require('jsonwebtoken');

module.exports = (user) => jwt.sign(user.toObject(), (process.env.ACCESS_TOKEN_SECRET
  || 'd5af7b5f83fad6c6eaa67ecdf39bba980e989d46e6a2e2b98bf733fd9de52dc4694b25a35ec6e197c2cf9460c8a277a3'), {
  expiresIn: '12h',
});
