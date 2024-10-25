const New = require('../models/new.model');

// Create a new record
exports.createNew = async (req, res) => {
  try {
    const { title_la, title_en, description_la, description_en } = req.body;
    const newRecord = await New.create({
      title_la,
      title_en,
      description_la,
      description_en
    });
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ message: 'Error creating record', error });
  }
};

// Get all records
exports.getAllNews = async (req, res) => {
  try {
    const news = await New.findAll();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching records', error });
  }
};

// Get a single record by ID
exports.getNewById = async (req, res) => {
  try {
    const { id } = req.params;
    const newRecord = await New.findByPk(id);
    if (!newRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(newRecord);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching record', error });
  }
};

// Update a record by ID
exports.updateNew = async (req, res) => {
  try {
    const { id } = req.params;
    const { title_la, title_en, description_la, description_en } = req.body;
    const updatedRecord = await New.update(
      { title_la, title_en, description_la, description_en },
      { where: { id } }
    );
    if (updatedRecord[0] === 0) {
      return res.status(404).json({ message: 'Record not found or not updated' });
    }
    res.status(200).json({ message: 'Record updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating record', error });
  }
};

// Delete a record by ID
exports.deleteNew = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await New.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting record', error });
  }
};
