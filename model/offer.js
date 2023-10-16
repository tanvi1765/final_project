const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        start_date: {
            type: Date,
            default: Date.now(),
        },
        end_date: {
            type: Date,
            default: Date.now(),
        },
        discount_percentage: {
            type: String,
            trim: true,
        },
        Restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "Restaurant",
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Offer = mongoose.model("Offer", offerSchema);
module.exports = Offer;