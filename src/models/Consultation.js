import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  business: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  providers: {
    type: String,
    enum: ['1-5', '6-10', '11-20', '20+'],
    required: true
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'completed'],
    default: 'new'
  }
}, {
  timestamps: true
});

const Consultation = mongoose.models.Consultation || mongoose.model('Consultation', consultationSchema);
export default Consultation;
