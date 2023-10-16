const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        item_name: {
            type: String,
            trim:true,
        },
        total_items: {
            type: Number,
            default: 0,
        },
        total_price: {
            type: Number,
            default: 0,
        },
        coupon_code: {
            type: Number,
            default: 0,
        },
        User: {
            type: mongoose.Types.ObjectId,
            ref: "User",
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

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;