import express from 'express';
import Home from '../models/Home.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const homeData = await Home.findOne({});
    res.json(homeData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const newHomeData = new Home(req.body);

  try {
    const savedHomeData = await newHomeData.save();
    res.status(201).json(savedHomeData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedHomeData = await Home.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedHomeData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removedHomeData = await Home.findByIdAndDelete(req.params.id);
    res.json(removedHomeData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
