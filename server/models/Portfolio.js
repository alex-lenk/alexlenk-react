import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  browserTitle: { type: String, required: true },
  browserDescription: { type: String, required: false },
  pageTitle: { type: String, required: false },
  pageContent: { type: String, required: false },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
});

export default mongoose.model('Portfolio', schema);
