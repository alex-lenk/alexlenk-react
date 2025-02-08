import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema({
  browserTitle: { type: String, required: true },
  browserDescription: { type: String, required: false },
  pageTitle: { type: String, required: false },
});

export default model('Skills', schema);
