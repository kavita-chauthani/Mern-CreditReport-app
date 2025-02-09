const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    totalAccounts: {
      type: Number,
      required: true,
    },
    activeAccounts: {
      type: Number,
      required: true,
    },
    closedAccounts: {
      type: Number,
      required: true,
    },
    currentBalance: {
      type: Number,
      required: true,
    },
    securedAmount: {
      type: Number,
      required: true,
    },
    unsecuredAmount: {
      type: Number,
      required: true,
    },
    last7DaysInquires: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Report", ReportSchema);
