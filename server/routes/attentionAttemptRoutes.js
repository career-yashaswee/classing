const express = require('express');
const router = express.Router();
const {
  createResponse,
  getResponseById,
  getAllResponses,
  updateResponse,
  deleteResponse
} = require('../controllers/attentionAttemptController');

// Create a new response
router.post('/', createResponse);
// Get all responses
router.get('/', getAllResponses);
// Get a specific response by ID
router.get('/:id', getResponseById);
// Update a response by ID
router.put('/:id', updateResponse);
// Delete a response by ID
router.delete('/:id', deleteResponse);

module.exports = router;
