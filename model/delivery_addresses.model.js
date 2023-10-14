const mongoose = require("mongoose");

const deliveryAddressesSchema = new mongoose.Schema(
    {
        street_address: {
            type: String,
            trim: true,
        },
        User: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        City: {
            type: mongoose.Types.ObjectId,
            ref: "City"
        },
        State: {
            type: mongoose.Types.ObjectId,
            ref: "State"
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const DeliveryAddresses = mongoose.model("DeliveryAddresses", deliveryAddressesSchema);
module.exports = DeliveryAddresses;