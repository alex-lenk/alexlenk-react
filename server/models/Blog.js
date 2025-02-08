import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const blogSchema = new Schema({
  browserTitle: { type: String, required: true },
  browserDescription: { type: String, required: false },
  pageTitle: { type: String, required: false },
  pageContent: { type: String, required: false },
});

export default model('Blog', blogSchema);
