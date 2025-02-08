import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    browserTitle: { type: String, required: true },
    pageTitle: { type: String, required: true },
    description: { type: String, required: false },
    content: { type: String, required: true },
    introtext: { type: String, required: false },
    imageURL: { type: String, required: false },
    slug: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: new Date(), required: true },
    category: { type: mongoose.Types.ObjectId, ref: 'Category', required: true },
    tags: { type: [String], required: true },
    createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

export default mongoose.model('Post', postSchema);
