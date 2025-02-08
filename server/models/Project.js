import mongoose from 'mongoose';

const StackSchema = new mongoose.Schema({
  _id: String,
  name: String,
});

const ProjectSchema = new mongoose.Schema(
  {
    img: { type: String, required: false },
    title: { type: String, required: false },
    introText: { type: String, required: false },
    gitHub: { type: String, required: false },
    link: { type: String, required: false },
    stack: [StackSchema],
  },
  {
    timestamps: true,
  },
  {
    strict: 'throw',
  },
);

export default mongoose.model('Project', ProjectSchema);
