const mongoose = require("mongoose");

const { toJSON, paginate } = require("./plugins");

const iBetSchema = mongoose.Schema(
  {
    account: {
      type: String,
      required: true,
      trim: true,
    },
    cur: {
      type: String,
      required: true,
      trim: true,
    },
    contact: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: String,
      required: true,
    },
    valid_amount: {
      type: String,
      required: true,
    },
    bet_amount: {
      type: String,
      required: true,
    },
    members_wl: {
      type: String,
      required: true,
    },
    members_com: {
      type: String,
      required: true,
    },
    members_total: {
      type: String,
      required: true,
    },
    agent_profit_wl: {
      type: String,
      required: true,
    },
    agent_profit_com: {
      type: String,
      required: true,
    },
    agent_profit_total: {
      type: String,
      required: true,
    },
    master_profit_wl: {
      type: String,
      required: true,
    },
    master_profit_com: {
      type: String,
      required: true,
    },
    master_profit_total: {
      type: String,
      required: true,
    },
    senior_profit_wl: {
      type: String,
      required: true,
    },
    senior_profit_com: {
      type: String,
      required: true,
    },
    senior_profit_total: {
      type: String,
      required: true,
    },
    company_wl: {
      type: String,
      required: true,
    },
    company_com: {
      type: String,
      required: true,
    },
    company_total: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

// add plugin that converts mongoose to json
iBetSchema.plugin(toJSON);
iBetSchema.plugin(paginate);

/**
 * @typedef ThreeSixFive
 */
const Ibet = mongoose.model("Ibet", iBetSchema);

module.exports = Ibet;
