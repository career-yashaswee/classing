const TaskSubmission = require("../schemas/taskSubmissionSchema/taskSubmissionSchema");

// Create a new task submission
exports.createSubmission = async (req, res) => {
  try {
    const { studentID, componentSubmissions } = req.body;
    const newSubmission = new TaskSubmission({
      studentID,
      componentSubmissions,
    });
    const savedSubmission = await newSubmission.save();
    res.status(201).json(savedSubmission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all submissions
exports.getAllSubmissions = async (req, res) => {
  try {
    const submissions = await TaskSubmission.find().populate("studentID").populate("componentSubmissions.componentID");
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get submission by ID
exports.getSubmissionById = async (req, res) => {
  try {
    const submission = await TaskSubmission.findById(req.params.id).populate("studentID").populate("componentSubmissions.componentID");
    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }
    res.status(200).json(submission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get submission by Student ID
exports.getSubmissionByStudentID = async (req, res) => {
    try {
      const submissions = await TaskSubmission.find({ studentID: req.params.studentID }).populate("studentID").populate("componentSubmissions.componentID");
      if (!submissions.length) {
        return res.status(404).json({ message: "No submissions found for this student" });
      }
      res.status(200).json(submissions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Update submission score and feedback
exports.updateSubmission = async (req, res) => {
  try {
    const { componentSubmissions } = req.body;
    const updatedSubmission = await TaskSubmission.findByIdAndUpdate(
      req.params.id,
      { $set: { componentSubmissions, gradedAt: new Date() } },
      { new: true }
    );
    if (!updatedSubmission) {
      return res.status(404).json({ message: "Submission not found" });
    }
    res.status(200).json(updatedSubmission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete submission by ID
exports.deleteSubmission = async (req, res) => {
  try {
    const deletedSubmission = await TaskSubmission.findByIdAndDelete(req.params.id);
    if (!deletedSubmission) {
      return res.status(404).json({ message: "Submission not found" });
    }
    res.status(200).json({ message: "Submission deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
