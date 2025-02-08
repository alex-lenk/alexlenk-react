import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    browserTitle: { type: String, required: true },
    browserDescription: { type: String, required: false },
    pageTitle: { type: String, required: false },
    pageContent: { type: String, required: false },
    slug: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: new Date(), required: true },
  },
  { timestamps: true },
);

export default model('Category', categorySchema);
