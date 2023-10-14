const mongoose = require("mongoose");

const restaurantspecializesSchema = new mongoose.Schema(
    {
        specilizes_type: {
            type: String,
            trim: true
        },
        food_type: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKay: false,
    }
);
const restaurantspecializes = mongoose.model("restaurantspecializes", restaurantspecializesSchema);
module.exports = restaurantspecializes;