const express = require("express");
const router = express.Router();
const {  getAllDonors , addDonor ,  getDonorById ,updateDonorById ,deleteDonorById,searchinDonors} = require("../controllers/donor");

// GET all donors
router.get("/", getAllDonors);

// POST new donor
router.post("/", addDonor);

// GET donor by ID
router.get("/find/:id", getDonorById);

// PUT update donor by ID
router.put("/find/:id", updateDonorById);

// DELETE donor by ID
router.delete("/find/:id", deleteDonorById);

// SEARCH donors
//router.get("/search", searchinDonors);


// Search donors by name or email
router.get("/search", async (req, res) => {
  try {
    const { name, email } = req.query;
    const query = {};
    if (name) query.name = { $regex: name, $options: "i" };
    if (email) query.email = { $regex: email, $options: "i" };

    const donors = await Donor.find(query);
    res.status(200).json(donors);
  } catch (err) {
    console.error("Search Donor Error:", err);
    res.status(500).json({ message: "Failed to search donors." });
  }
});

module.exports = router;