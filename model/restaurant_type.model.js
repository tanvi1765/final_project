const mongoose = require("mongoose");

const restauranttypeSchema = new mongoose.Schema(
    {
        restaurant_type: {
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
const Restauranttype = mongoose.model("Restauranttype", restauranttypeSchema);
module.exports = Restauranttype;