const express = require("express");
const { upload } = require("../middlewares/upload");
const { imageValidation } = require("../validations");
const { imageController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-restaurant_img",
    upload.single("image"),
    validate(imageValidation.createImage),
    imageController.createImage
);

// list
router.get(
    "/list",
    imageController.imageList
);

// update
router.put(
    "/update-restaurant_img/:imageId",
    imageController.updateRecode
);

// delete
router.delete(
    "/delete-restaurant_img/:imageId",
    imageController.deleteRecode
);

module.exports = router;
