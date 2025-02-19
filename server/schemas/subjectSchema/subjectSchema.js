const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  subject_name: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
  },
}, { timestamps: true });

const Subject = mongoose.model('Subject', SubjectSchema);
module.exports = Subject;
