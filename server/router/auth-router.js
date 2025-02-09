const express = require("express");
const router = express.Router();
const CreditReport = require("../models/user-model");
const Report = require("../models/credit-model");
const Account = require("../models/account-model");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const suffix = Date.now();
    cb(null, suffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/create", upload.single("photo"), async (req, res) => {
  try {
    const { name, mobilePhone, pan, creditScore } = req.body;
    const photopath = req.file ? req.file.path : null;
    const newUser = new CreditReport({
      name,
      mobilePhone,
      pan,
      creditScore,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating Basic detail" });
  }
});

router.post("/report", upload.single("photo"), async (req, res) => {
  try {
    const {
      totalAccounts,
      activeAccounts,
      closedAccounts,
      currentBalance,
      securedAmount,
      unsecuredAmount,
      last7DaysInquires,
    } = req.body;
    const newUser = new Report({
      totalAccounts,
      activeAccounts,
      closedAccounts,
      currentBalance,
      securedAmount,
      unsecuredAmount,
      last7DaysInquires,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user record" });
  }
});

router.post("/credit", upload.single("photo"), async (req, res) => {
  try {
    const {
      creditCard,
      bank,
      address,
      accountNumber,
      amountOverdue,
      currentBalance,
    } = req.body;
    const newUser = new Account({
      creditCard,
      bank,
      address,
      accountNumber,
      amountOverdue,
      currentBalance,
    });
    await newUser.save();
    res.status(201).json({
      message: "Credit Account Information created successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating Account information" });
  }
});

module.exports = router;
