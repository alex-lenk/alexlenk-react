import express from 'express';
const router = express.Router();
import JobHistory from '../models/JobHistory.js';

router.get('/', async (req, res) => {
  try {
    const jobHistories = await JobHistory.find();
    res.json(jobHistories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const jobHistory = await JobHistory.findById(req.params.id);
    if (!jobHistory) return res.status(404).json({ message: 'Job history not found' });
    res.json(jobHistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const newJobHistory = new JobHistory(req.body);

  try {
    const savedJobHistory = await newJobHistory.save();
    res.status(201).json(savedJobHistory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const updatedJobHistory = await JobHistory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJobHistory) return res.status(404).json({ message: 'Job history not found' });
    res.json(updatedJobHistory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedJobHistory = await JobHistory.findByIdAndDelete(req.params.id);
    if (!deletedJobHistory) return res.status(404).json({ message: 'Job history not found' });
    res.json({ message: 'Job history deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
