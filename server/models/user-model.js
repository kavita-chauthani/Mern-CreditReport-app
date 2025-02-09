const mongoose = require("mongoose");
const CreditReportSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobilePhone: {
      type: String,
      required: true,
    },
    pan: {
      type: Number,
      required: true,
    },
    creditScore: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("CreditReport", CreditReportSchema);
