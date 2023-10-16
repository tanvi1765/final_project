const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        restaurant_name: {
            type: String,
            trim: true,
        },
        restaurant_address: {
            type: String,
            trim: true,
        },
        restaurant_contect_no: {
            type: Number,
        },
        Owner: {
            type: mongoose.Types.ObjectId,
            ref: "Owner",
        },
        Restauranttype: {
            type: mongoose.Types.ObjectId,
            ref: "Restauranttype",
        },
        Image: {
            type: mongoose.Types.ObjectId,
            ref: "Image",
        },
        is_active: {
            type: Boolean,
            default: true,
        }

    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;