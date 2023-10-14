const express = require("express");
const { itemValidation } = require("../validations");
const { itemController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-item",
    validate(itemValidation.createItem),
    itemController.createItem
);

// list
router.get(
    "/list",
    itemController.itemList
);

// update
router.put(
    "/update-item/:itemId",
    itemController.updateRecode
);

// delete
router.delete(
    "/delete-item/:itemId",
    itemController.deleteRecode
);

module.exports = router;
