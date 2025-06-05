import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'unsubscribed'],
    default: 'active'
  }
}, {
  timestamps: true
});

const Newsletter = mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterSchema);
export default Newsletter;
