const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers;
  token = token?.replace("Bearer " , "");
  console.log(token);
  jwt.verify(
    token,
    process.env.JWT_SECRET,
    { algorithms: 'HS512' },
    (err, decoded) => {
      if (err) {
        res.status(400).json({
          error: 'Invalid token',
          message: 'The token is invalid or expired, send a correct token'
        });
      } else {
        console.log(decoded);
        next();
      };
    }
  );
};

module.exports = authMiddleware;