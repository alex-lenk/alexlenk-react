import mongoose from 'mongoose';

const schemaHome = new mongoose.Schema({
  browserTitle: { type: String, required: true },
  browserDescription: { type: String, required: false },
  pageTitle: { type: String, required: false },
  aboveTitle: { type: String, required: false },
  phrase: { type: String, required: false },
});

export default mongoose.model('Home', schemaHome);
