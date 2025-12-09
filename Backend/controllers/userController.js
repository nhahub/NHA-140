
const User = require("../models/User");

const getPendingUsers = async (req, res) => {
  try {
    const pendingUsers = await User.find({ isPending: true }).select("-password");
    res.status(200).json(pendingUsers);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch pending users." });
  }
};


const getAllDonors = async (req, res) => {
  try {
    const donors = await User.find({ 
      isApproved: true, 
      isPending: false,
      role: "user" 
    }).select("-password").sort({ createdAt: -1 });
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json(error);
  }
};


const approveUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: { isApproved: true, isPending: false },
        $push: {
          notifications: {
            message: "Congratulations! Your blood donation request has been accepted. Thank you for saving lives.",
            read: false
          }
        }
      },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "The donor has been successfully accepted!"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ "message": "Failed to accept the donor" });
  }
};

const rejectUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ "message": "The request has been rejected and the account has been deleted" });
  } catch (error) {
    res.status(500).json({ "message": "Failed to reject the request" });
  }
};


const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).select("-password");
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

    



module.exports = {
  getPendingUsers,
  getAllDonors,
  approveUser,
  rejectUser,
  getUserById,
  updateUser,
};