import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  browserTitle: { type: String, required: true },
  browserDescription: { type: String, required: false },
  pageTitle: { type: String, required: false },
  phone: { type: String, required: false },
  email: { type: String, required: false },
  address: { type: String, required: false },
  text: { type: String, required: false },
});

export default mongoose.model('Contacts', schema);
