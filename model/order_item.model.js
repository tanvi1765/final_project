const mongoose = require("mongoose");

const orderitemSchema = new mongoose.Schema(
    {
        quantity: {
            type: Number,
            trim: true,
        },
        subtotal_price: {
            type: Number,
            default: 0,
        },
        Order: {
            type: mongoose.Types.ObjectId,
            ref: "Order",
        },
        Item: {
            type: mongoose.Types.ObjectId,
            ref: "Item",
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

const Orderitem = mongoose.model("Orderitem", orderitemSchema);
module.exports = Orderitem;
