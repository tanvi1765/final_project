const express = require("express");
const { offeritemValidation } = require("../validations");
const { offeritemController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-offeritem",
    validate(offeritemValidation.createOfferitem),
    offeritemController.createOfferitem
);

// list
router.get(
    "/list",
    offeritemController.offeritemList
);

// update
router.put(
    "/update-offeritem/:offeritemId",
    offeritemController.updateRecode
);

// delete
router.delete(
    "/delete-offeritem/:offeritemId",
    offeritemController.deleteRecode
);

module.exports = router;
