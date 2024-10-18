const mongoose = require("mongoose");

const { toJSON, paginate } = require("./plugins");

const threeSixFiveSchema = mongoose.Schema(
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
    bet_amount: {
      type: String,
      required: true,
    },
    member_count: {
      type: String,
      required: true,
    },
    trun_over: {
      type: String,
      required: true,
    },
    stake_count: {
      type: String,
      required: true,
    },
    gross_comm: {
      type: String,
      required: true,
    },
    member_wl: {
      type: String,
      required: true,
    },
    member_com: {
      type: String,
      required: true,
    },
    member_total: {
      type: String,
      required: true,
    },
    agent_turnover: {
      type: String,
      required: true,
    },
    agent_wl: {
      type: String,
      required: true,
    },

    agent_com: {
      type: String,
      required: true,
    },
    agent_total: {
      type: String,
      required: true,
    },
    master_agent_turnover: {
      type: String,
      required: true,
    },
    master_agent_wl: {
      type: String,
      required: true,
    },

    master_agent_com: {
      type: String,
      required: true,
    },
    master_agent_total: {
      type: String,
      required: true,
    },
    super_turnover: {
      type: String,
      required: true,
    },
    super_wl: {
      type: String,
      required: true,
    },
    super_com: {
      type: String,
      required: true,
    },
    super_total: {
      type: String,
      required: true,
    },

    company_turnover: {
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
threeSixFiveSchema.plugin(toJSON);
threeSixFiveSchema.plugin(paginate);

/**
 * @typedef ThreeSixFive
 */
const ThreeSixFive = mongoose.model("ThreeSixFive", threeSixFiveSchema);

module.exports = ThreeSixFive;
