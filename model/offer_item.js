const mongoose = require("mongoose");

const offeritemSchema = new mongoose.Schema(
    {
        discounted_price: {
            type: Number,
            default: 0,
        },
        free_item_quantity: {
            type: Number,
            default: 0,
        },
        Offer: {
            type: mongoose.Types.ObjectId,
            ref: "Offer",
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

const Offeritem = mongoose.model("Offeritem", offeritemSchema);
module.exports = Offeritem;