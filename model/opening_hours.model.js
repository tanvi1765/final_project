const mongoose = require("mongoose");

const openinghoursSchema = new mongoose.Schema(
    {
        open_time: {
            type: String,
            trim: true,
        },
        close_time: {
            type: String,
            trim: true,
        },
        day_of_week: {
            type: String,
            trim: true,
        },
        Restaurant:{
            type:mongoose.Types.ObjectId,
            ref:"Restaurant",
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Openinghours = mongoose.model("Openinghours", openinghoursSchema);
module.exports = Openinghours;