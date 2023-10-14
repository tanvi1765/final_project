const express = require("express");
const { openinghoursValidation } = require("../validations");
const { openinghoursController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-openinghours",
    validate(openinghoursValidation.createOpeninghours),
    openinghoursController.createOpeninghours
);

// list
router.get(
    "/list",
    openinghoursController.openinghoursList
);

// update
router.put(
    "/update-openinghours/:openinghoursId",
    openinghoursController.updateRecode
);

// delete
router.delete(
    "/delete-openinghours/:openinghoursId",
    openinghoursController.deleteRecode
);

module.exports = router;
