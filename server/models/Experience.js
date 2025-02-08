import mongoose from 'mongoose';

const schemaExperience = new mongoose.Schema({
  browserTitle: { type: String, required: true },
  browserDescription: { type: String, required: false },
  pageTitle: { type: String, required: false },
  name: { type: String, required: false },
  text: { type: String, required: false },
  overTitleWork: { type: String, required: false },
  aside: {
    type: Object,
    required: true,
  },
});

export default mongoose.model('Experience', schemaExperience);
