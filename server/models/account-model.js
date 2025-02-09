const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
  {
    creditCard: { type: String, required: false },
    bank: { type: String, required: false },
    address: { type: String, required: false },
    accountNumber: { type: String, required: false },
    amountOverdue: { type: Number, required: false },
    currentBalance: { type: Number, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Account", AccountSchema);
