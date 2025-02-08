import express from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import updateProfile from '../controllers/profile.js';
import check from '../middleware/tokenCheck.js';

const router = express.Router();

router.put('/update-profile', check, mongoSanitize(), updateProfile);

export default router;
