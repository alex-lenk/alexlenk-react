import mongoose from 'mongoose';
const { Schema, Types } = mongoose;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: true,
  },
  createdBy: {
    type: Types.ObjectId,
    ref: 'User',
  },
  replies: [
    {
      content: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: new Date(),
        required: true,
      },
      createdBy: {
        type: Types.ObjectId,
        ref: 'User',
      },
    },
  ],
});

export default commentSchema;
