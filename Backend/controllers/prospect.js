const Prospect = require("../models/Prospect");

// GET all prospects
const getAllProspects = async (req, res) => {
  try {
    const prospects = await Prospect.find();
    res.status(200).json(prospects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch prospects." });
  }
};

// ADD new prospect
const addProspect = async (req, res) => {
  try {
    const newProspect = new Prospect(req.body);
    const savedProspect = await newProspect.save();
    if (!savedProspect) {
      return res.status(400).json({ message: "Failed to save prospect." });
    } 
    res.status(201).json(savedProspect);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add prospect." });
  }   
};

// DELETE a prospect
const deleteProspect = async (req, res) => {
  try {
    await Prospect.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Prospect deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete prospect." });
  }
};

const getProspect = async (req, res) => {
  try {
    const prospect = await Prospect.findById(req.params.id);
    res.status(200).json(prospect);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch prospect." });
  }
};
const searchinProspects = async (req, res) => {
  try {
    const { name, email } = req.query;
    const query = {};
    if (name) query.name = { $regex: name, $options: "i" };
    if (email) query.email = { $regex: email, $options: "i" };
    const prospects = await Prospect.find(query);
    res.status(200).json(prospects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to search prospects." });
  }
};

module.exports = { getAllProspects, addProspect, deleteProspect, getProspect, searchinProspects };