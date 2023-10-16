const fs = require("fs");
const { imageService } = require("../services");

// create
const createImage = async (req, res) => {
    try {
        const reqBody = req.body;

        if (req.file) {
            reqBody.image = req.file.filename;
        } else {
            throw new Error("image is required!");
        }
        const image = await imageService.createImage(reqBody);
        res.status(200).json({
            success: true,
            message: " Image create successfully!",
            data: { image }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//Image list
const imageList = async (req, res) => {
    try {
        const getList = await imageService.imageList();
        res.status(200).json({
            success: true,
            message: "Image list get successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const reqBody = req.Body;
        const imageId = req.params.imageId;
        const imageEx = await imageService.getimageById(imageId);
        if (!imageEx) {
            throw new Error("Image is not Found");
        };

        if (req.file) {
            reqBody.image = req.file.filename;
        }
        const updateimage = await imageService.updateRecode(
            imageId,
            reqBody
        );
        if (updateimage) {
            if (req.file) {
                const filePath = `./public/image/${imageEx.image}`
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }
        } else {
            throw new Error("Something went wrong, please try again or later!")
        }

        res.status(200).json({
            success: true,
            message: "Image update successfully!",
            data: updateimage
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const imageId = res.params.imageId;

        const imageEx = await imageService.getimageById(imageId);
        if (!imageEx) {
            throw new Error("Image is not found")
        }

        const deleteimage = await imageService.deleteRecode(imageId);
        if (deleteimage) {
            const filePath = `./public/image/${imageEx.image}`;
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        } else {
            throw new Error("Somthing want wrong.please try agian or later!")
        }
        res.status(200).json({
            success: false,
            message: "Image delete successfully",
            data: deleteimage
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createImage,
    imageList,
    updateRecode,
    deleteRecode
};