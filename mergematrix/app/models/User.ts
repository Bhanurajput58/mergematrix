import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  generations: {
    type: Number,
    default: 0
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  lastGeneration: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.User || mongoose.model('User', userSchema); 