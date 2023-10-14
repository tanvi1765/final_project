const express = require("express");
const { deliveriesValidation } = require("../validations");
const { deliveriesController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-deliveries",
    validate(deliveriesValidation.createDeliveries),
    deliveriesController.createDeliveries
);

// list
router.get(
    "/list",
    deliveriesController.deliveriesList
);

// update
router.put(
    "/update-deliveries/:deliveriesId",
    deliveriesController.updateRecode
);

// delete
router.delete(
    "/delete-deliveries/:deliveriesId",
    deliveriesController.deleteRecode
);

module.exports = router;
