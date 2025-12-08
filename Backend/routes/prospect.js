const express = require("express");
const router = express.Router();
const { getAllProspects, addProspect, deleteProspect, getProspect,searchinProspects } = require("../controllers/prospect");

// GET all prospects
router.get("/", getAllProspects);

// POST new prospect
router.post("/", addProspect);

// DELETE a prospect
router.delete("/:id", deleteProspect);

// GET a single prospect by ID
router.get("/:id", getProspect);

//search prospects
//router.get("/search", searchinProspects);
router.get("/search", async (req, res) => {
  try {
    const { name, email } = req.query;
    const query = {};
    if (name) query.name = { $regex: name, $options: "i" };
    if (email) query.email = { $regex: email, $options: "i" };

    const prospects = await Prospect.find(query);
    res.status(200).json(prospects);
  } catch (err) {
    console.error("Search Prospect Error:", err);
    res.status(500).json({ message: "Failed to search prospects." });
  }
});

module.exports = router;
