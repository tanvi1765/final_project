const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        Menuitem: {
            type: mongoose.Types.ObjectId,
            ref: "Menuitem",
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

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;