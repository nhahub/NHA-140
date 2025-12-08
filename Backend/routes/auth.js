const express = require("express");
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  forgotPassword ,
  updatePassword,
} = require("../controllers/auth");

const { 
  getPendingUsers, 
  getAllDonors, 
  approveUser, 
  rejectUser ,

} = require("../controllers/userController");

const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

// Auth routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);


// Admin routes
router.get("/pending-users", verifyTokenAndAdmin, getPendingUsers);
router.get("/donors", verifyTokenAndAdmin, getAllDonors);        // اختياري
router.put("/approve/:id", verifyTokenAndAdmin, approveUser);
router.delete("/reject/:id", verifyTokenAndAdmin, rejectUser);


module.exports = router;