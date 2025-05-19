import mongoose from 'mongoose';

const pdfSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true
  },
  userEmail: {
    type: String,
    required: true,
    index: true
  },
  fileName: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  },
  mergedFiles: [{
    name: String,
    size: Number
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  settings: {
    quality: String,
    orientation: String,
    compression: String
  }
});

// Create model if it doesn't exist
const PDF = mongoose.models.PDF || mongoose.model('PDF', pdfSchema);

export default PDF; 