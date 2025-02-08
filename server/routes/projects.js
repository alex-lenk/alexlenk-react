import express from 'express';
const router = express.Router();
import Project from '../models/Project.js';

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const project = new Project({
    img: req.body.img,
    title: req.body.title,
    introText: req.body.introText,
    link: req.body.link,
    gitHub: req.body.gitHub,
    stack: req.body.stack,
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
