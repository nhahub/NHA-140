const Donor = require("../models/Donor");


// GET all donors
const getAllDonors = async (req, res) => {
  try { const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch donors." });
  }
};

// ADD new donor
const addDonor = async (req, res) => {
  try { const newDonor = new Donor(req.body);
    const savedDonor = await newDonor.save();
    res.status(201).json(savedDonor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add donor." });
  }
};

const getDonorById = async (req, res) => {
    try {
      const donor = await Donor.findById(req.params.id);
      if (!donor) {
        return res.status(404).json({ message: "Donor not found." });
      }
      res.status(200).json(donor);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch donor." });
    }
  };

  const updateDonorById = async (req, res) => {
    try {
      const updatedDonor = await Donor.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      if (!updatedDonor) {
        return res.status(404).json({ message: "Donor not found." });
      }
      res.status(200).json(updatedDonor);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to update donor." });
    }
  };

  const deleteDonorById = async (req, res) => {
    try {
      const deletedDonor = await Donor.findByIdAndDelete(req.params.id);
        if (!deletedDonor) {
            return res.status(404).json({ message: "Donor not found." });
        }
      res.status(200).json({ message: "Donor deleted successfully." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to delete donor." });
    }
  };

  const searchinDonors = async (req, res) => {
    try {
      const { name, email } = req.query;
      const query = {};
      if (name) query.name = { $regex: name, $options: "i" };
      if (email) query.email = { $regex: email, $options: "i" };
      const donors = await Donor.find(query);
      res.status(200).json(donors);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to search donors." });
    }
  };

module.exports = {
  getAllDonors,
  addDonor,
  getDonorById,
    updateDonorById,
    deleteDonorById,
    searchinDonors
};