// models/User.js
import mongoose from 'mongoose';

const ResponseSchema = new mongoose.Schema({
  response: [Number]
});

const Response = mongoose.models.Response ||  mongoose.model('Response', ResponseSchema);

export default Response