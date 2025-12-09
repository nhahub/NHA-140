const router = require("express").Router();
const User = require("../models/User");
const Prospect = require("../models/Prospect");
const Donor = require("../models/Donor");

// GET profile by email
router.get("/profile", async (req, res) => {
  const email = req.query.email;

  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const prospect = await Prospect.findOne({ email });
    if (prospect) {
      return res.status(200).json({ user: prospect, status: "Pending" });
    }

    const donor = await Donor.findOne({ email });
    if (donor) {
      return res.status(200).json({ user: donor, status: "Approved" });
    }

    res.status(404).json({ message: "User not found" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
