const express = require("express");
const { countryValidation } = require("../validations");
const { countryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-country",
    validate(countryValidation.createCountry),
    countryController.createCountry
);

// list
router.get(
    "/list",
    countryController.countryList
);

// update
router.put(
    "/update-country/:countryId",
    countryController.updateRecode
);

// delete
router.delete(
    "/delete-country/:countryId",
    countryController.deleteRecode
);

module.exports = router;
