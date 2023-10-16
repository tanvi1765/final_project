const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
    {
        country_name: {
            type: String,
            trim: true,
            default:"india"
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
const Country = mongoose.model("Country", countrySchema);
module.exports = Country;