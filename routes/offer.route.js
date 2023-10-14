const express = require("express");
const { offerValidation } = require("../validations");
const { offerController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-offer",
    validate(offerValidation.createOffer),
    offerController.createOffer
);

// list
router.get(
    "/list",
    offerController.offerList
);

// update
router.put(
    "/update-offer/:offerId",
    offerController.updateRecode
);

// delete
router.delete(
    "/delete-offer/:offerId",
    offerController.deleteRecode
);

module.exports = router;
