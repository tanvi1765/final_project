const express = require("express");
const { ownerValidation } = require("../validations");
const { ownerController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-owner",
    validate(ownerValidation.createOwner),
    ownerController.createOwner
);

// list
router.get(
    "/list",
    ownerController.ownerList
);

// update
router.put(
    "/update-owner/:ownerId",
    ownerController.updateRecode
);

// delete
router.delete(
    "/delete-owner/:ownerId",
    ownerController.deleteRecode
);

module.exports = router;
