import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import config from '../config.js';

const check = async (req, res, next) => {
  const header = req.headers['authorization'];
  const token = header && header.split(' ')[1];

  if (!token) {
    return res.status(401).send({
      message: 'Please provide a token',
    });
  }

  try {
    const user = jwt.verify(token, config.jwtSecret);
    try {
      const foundUser = await User.findById(user.id);
      if (!foundUser) {
        return res.status(403).send({
          message: 'Invalid token',
        });
      }
      req.user = foundUser;
      next();
    } catch (error) {
      res.status(500).send(error);
    }
  } catch (error) {
    return res.status(401).send({
      message: 'The session ended. Please reconnect',
    });
  }
};

export default check;
