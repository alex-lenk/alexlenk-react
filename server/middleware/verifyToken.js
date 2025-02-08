import jwt from 'jsonwebtoken';
import config from '../config.js';

function verifyToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    req.user = jwt.verify(token, config.jwtSecret);
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
}

export default verifyToken;
