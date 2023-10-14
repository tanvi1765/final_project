const express = require("express");
const {  specializeValidation } = require("../validations");
const {  specializesController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/specializes",
    validate(specializeValidation.createSpecilalizes),
    specializesController.createspecializes
);

// list
router.get(
    "/list",
    specializesController.specializesList
);

// update
router.put(
    "/update/:restaurantId",
    specializesController.updateRecode
);

// delete
router.delete(
    "/delete-recode/:restaurantId",
    specializesController.deleteRecode
);
module.exports = router;