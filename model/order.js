const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_data: {
            type: Date,
            default: Date.now(),
        },
        total_price: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            trim: true,
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

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
