import express from 'express';
const router = express.Router();
import Portfolio from '../models/Portfolio.js';

router.get('/', async (req, res) => {
  try {
    const portfolioData = await Portfolio.findOne({});
    res.json(portfolioData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const newPortfolioData = new Portfolio(req.body);

  try {
    const savedPortfolioData = await newPortfolioData.save();
    res.status(201).json(savedPortfolioData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedPortfolioData = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPortfolioData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removedPortfolioData = await Portfolio.findByIdAndDelete(req.params.id);
    res.json(removedPortfolioData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
