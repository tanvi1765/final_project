const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
    {
        state_name: {
            type: String,
            trim: true,
        },
        Country: {
            type: mongoose.Types.ObjectId,
            ref: "Country",
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const State = mongoose.model("State", stateSchema);
module.exports = State;