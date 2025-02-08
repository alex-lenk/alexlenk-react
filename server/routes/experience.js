import express from 'express';
const router = express.Router();
import Experience from '../models/Experience.js';
import verifyToken from '../middleware/verifyToken.js';

router.get('/', async (req, res) => {
  try {
    const fieldName = req.query.field;
    if (fieldName) {
      const experiences = await Experience.findOne({}).select(fieldName);
      res.json(experiences.map(exp => {
        const fieldParts = fieldName.split('.');
        let value = exp;
        for (const part of fieldParts) {
          value = value[part];
        }
        return { [fieldName]: value };
      }));
    } else {
      const experiences = await Experience.findOne({});
      res.json(experiences);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getExperience, (req, res) => {
  res.json(res.experience);
});

// Middleware for getting Experience by ID
async function getExperience(req, res, next) {
  let experience;
  try {
    experience = await Experience.findById(req.params.id);
    if (experience == null) {
      return res.status(404).json({ message: 'Experience not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.experience = experience;
  next();
}

router.post('/', verifyToken, async (req, res) => {
  const newExperience = new Experience({
    browserTitle: req.body.browserTitle,
    browserDescription: req.body.browserDescription,
    pageTitle: req.body.pageTitle,
    name: req.body.name,
    text: req.body.text,
    overTitleWork: req.body.overTitleWork,
    aside: req.body.aside,
  });

  try {
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update Experience
router.patch('/:id', verifyToken, getExperience, async (req, res) => {
  if (req.body.title != null) {
    res.experience.title = req.body.title;
  }
  if (req.body.description != null) {
    res.experience.description = req.body.description;
  }
  if (req.body.startDate != null) {
    res.experience.startDate = req.body.startDate;
  }
  if (req.body.endDate != null) {
    res.experience.endDate = req.body.endDate;
  }

  try {
    const updatedExperience = await res.experience.save();
    res.json(updatedExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', verifyToken, getExperience, async (req, res) => {
  try {
    await res.experience.remove();
    res.json({ message: 'Experience deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
