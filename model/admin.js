const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        phone_no: {
            type: Number,
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

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;