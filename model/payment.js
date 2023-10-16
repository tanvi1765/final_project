const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        payment_method: {
            type: String,
            trim: true,
        },
        amount: {
            type: String,
            trim: true,
        },
        payment_date: {
            type: String,
            trim: true,
        },
        payment_status: {
            type: String,
            trim: true
        },
        User:{
            type:mongoose.Types.ObjectId,
            ref:"User",
        },
        Order:{
            type:mongoose.Types.ObjectId,
            ref:"Order",
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
const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;



