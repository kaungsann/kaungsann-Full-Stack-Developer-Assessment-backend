const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const channelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
channelSchema.plugin(toJSON);
channelSchema.plugin(paginate);

/**
 * @typedef Channel
 */
const Channel = mongoose.model("Channel", channelSchema);

module.exports = Channel;
