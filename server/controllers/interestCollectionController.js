const InterestCollection = require("../schemas/interestCollectionSchema/interestCollectionSchema");

// Create a new Interest Collection
exports.createInterestCollection = async (req, res) => {
  try {
    const interestCollection = new InterestCollection(req.body);
    await interestCollection.save();
    res.status(201).json(interestCollection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Interest Collections
exports.getAllInterestCollections = async (req, res) => {
  try {
    const interestCollections = await InterestCollection.find();
    res.status(200).json(interestCollections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Interest Collection by ID
exports.getInterestCollectionById = async (req, res) => {
  try {
    const interestCollection = await InterestCollection.findById(req.params.id);
    if (!interestCollection) {
      return res.status(404).json({ message: "Interest Collection not found" });
    }
    res.status(200).json(interestCollection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all InterestCollection records by sessionId
exports.getInterestCollectionBySessionId = async (req, res) => {
  try {
    const interestCollections = await InterestCollection.find({ sessionId: req.params.sessionId });

    if (!interestCollections || interestCollections.length === 0) {
      return res.status(404).json({ message: "No interest collections found for this session" });
    }

    res.status(200).json(interestCollections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update an Interest Collection
exports.updateInterestCollection = async (req, res) => {
  try {
    const interestCollection = await InterestCollection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!interestCollection) {
      return res.status(404).json({ message: "Interest Collection not found" });
    }
    res.status(200).json(interestCollection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an Interest Collection
exports.deleteInterestCollection = async (req, res) => {
  try {
    const interestCollection = await InterestCollection.findByIdAndDelete(
      req.params.id
    );
    if (!interestCollection) {
      return res.status(404).json({ message: "Interest Collection not found" });
    }
    res
      .status(200)
      .json({ message: "Interest Collection deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
