import express from 'express';
const router = express.Router();
import Contacts from '../models/Contacts.js';

router.get('/', async (req, res) => {
  try {
    const contactsData = await Contacts.findOne({});
    res.json(contactsData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const newContactsData = new Contacts(req.body);

  try {
    const savedContactsData = await newContactsData.save();
    res.status(201).json(savedContactsData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedContactsData = await Contacts.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedContactsData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removedContactsData = await Contacts.findByIdAndDelete(req.params.id);
    res.json(removedContactsData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
