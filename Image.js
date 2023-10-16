const { Image } = require("../model");

const createImage = async (reqBody) => {
    return Image.create(reqBody);
};
const imageList = async (req, res) => {
    return Restaurantimage.find();
};

const getimageById = async (imageId) => {
    return Image.findById(imageId);
};

const updateRecode = async (imageId, updateBody) => {
    return Image.findByIdAndUpdate(imageId, { $set: updateBody });
};

const deleteRecode = async (imageId) => {
    return Image.findByIdAndDelete(imageId);
};

module.exports = {
    createImage,
    imageList,
    getimageById,
    updateRecode,
    deleteRecode
}