const mongoose = require('mongoose');
const Subject = require('../subjectSchema/subjectSchema');

const CourseSchema = new mongoose.Schema({
  course_name: { 
    type: String, 
    required: true, 
    trim: true, 
  },
  subject_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Subject', // References Subject model for the Subject.
    required: true,
  }
}, { timestamps: true });

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;