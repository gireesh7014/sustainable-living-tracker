const Footprint = require('../models/Footprint');

exports.calculateFootprint = async (req, res) => {
  const { userId, transport, energy, waste } = req.body;
  try {
    const footprint = new Footprint({ userId: req.user.id, transport, energy, waste });
    await footprint.save();
    res.status(201).json({ message: 'Footprint calculated', footprint });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserFootprint = async (req, res) => {
  const { userId } = req.params;
  try {
    const footprint = await Footprint.findOne({ userId });
    if (!footprint) return res.status(404).json({ message: 'Footprint not found' });
    res.status(200).json(footprint);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
