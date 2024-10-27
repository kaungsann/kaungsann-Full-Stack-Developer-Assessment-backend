const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const forexDataSchema = mongoose.Schema(
  {
    pair: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
forexDataSchema.plugin(toJSON);
forexDataSchema.plugin(paginate);

/**
 * @typedef Forex
 */
const Forex = mongoose.model("Forex", forexDataSchema);

module.exports = Forex;
