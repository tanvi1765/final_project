const mongoose = require("mongoose");
const config=require("../config/config");

const imgSchema = new mongoose.Schema(
    {
        image_name: {
            type: String,
            trim: true
        },
        image: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON:{
            transform:function(doc,data){
                if(data?.image){
                    data.image=`${config.base_url}image/${data.image}`;
                }
            }
        }
    }
);
const Image = mongoose.model("Image", imgSchema);
module.exports = Image;