const express = require("express");
const { cityValidation } = require("../validations");
const { cityController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-city",
    validate(cityValidation.createCity),
    cityController.createCity
);

// list
router.get(
    "/list",
    cityController.cityList
);

// update
router.put(
    "/update-city/:cityId",
    cityController.updateRecode
);

// delete
router.delete(
    "/delete-city/:cityId",
    cityController.deleteRecode
);

module.exports = router;
