const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Register a new user (donors only - pending approval)
const registerUser = async (req, res) => {
  try {
    const hashedPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name || req.body.username,
      tel: req.body.tel,
      address: req.body.address,
      bloodgroup: req.body.bloodgroup,
      weight: req.body.weight,
      lastDonationDate: req.body.lastDonationDate || null,
      diseases: req.body.diseases || "None",
      age: req.body.age,
      bloodpressure: req.body.bloodpressure,
      gender: req.body.gender,
      role: "user",
      isPending: true,
      isApproved: false,
    });

    const savedUser = await newUser.save();
    const { password, ...userInfo } = savedUser._doc;

    res.status(201).json({
      message: "Account created successfully! Awaiting admin approval.",
      user: userInfo,
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Registration failed. Please try again." });
  }
};

// Login user (Admin & Approved Users)
const loginUser = async (req, res) => {
  try {
    console.log("Login attempt with email:", req.body.email);

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Decrypt password
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      console.log("Incorrect password");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT Token
    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SEC,
      { expiresIn: "10d" }
    );

    const { password, ...info } = user._doc;

    console.log("Login successful - User:", user.role);
    res.status(200).json({
      ...info,
      accessToken,
      message: "Login successful!",
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// Forgot Password - Send Reset Link
const forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "Email not found." });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    const resetURL = `http://localhost:5173/reset-password/${resetToken}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Blood Bridge" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Password Reset Request - Blood Bridge",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; text-align: center;">
          <h2 style="color: #d32f2f;">Blood Bridge</h2>
          <h3>Password Reset Request</h3>
          <p>Hello <strong>${user.username}</strong>,</p>
          <p>You requested to reset your password. Click the button below to proceed:</p>
          <br/>
          <a href="${resetURL}" style="background:#d32f2f;color:white;padding:12px 30px;text-decoration:none;border-radius:8px;font-weight:bold;">
            Reset Password
          </a>
          <p style="margin-top:20px;color:#666;font-size:14px;">
            This link will expire in <strong>10 minutes</strong>.<br>
            If you didn't request this, you can safely ignore this email.
          </p>
          <hr/>
          <small>© 2025 Blood Bridge - Blood Donation System</small>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Password reset link sent to your email!" });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ message: "Failed to send reset email." });
  }
};



module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  
};