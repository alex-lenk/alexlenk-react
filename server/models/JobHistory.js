import mongoose from 'mongoose';

const jobHistorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  workStart: { type: String, required: true },
  workEnd: { type: String, required: true },
  description: { type: String, required: true },
  logo: { type: String, required: false },
});

export default mongoose.model('JobHistory', jobHistorySchema);
