import express from 'express';

const router = express.Router();
import Skills from '../models/Skills.js';

router.get('/', async (req, res) => {
  try {
    const skillsData = await Skills.findOne({});
    res.json(skillsData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const newSkillsData = new Skills(req.body);

  try {
    const savedSkillsData = await newSkillsData.save();
    res.status(201).json(savedSkillsData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedSkillsData = await Skills.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSkillsData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removedSkillsData = await Skills.findByIdAndDelete(req.params.id);
    res.json(removedSkillsData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
