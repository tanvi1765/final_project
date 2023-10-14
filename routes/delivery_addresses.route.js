const express = require("express");
const { deliveryaddressesValidation } = require("../validations");
const { deliveryaddressesController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-deliveryaddresses",
    validate(deliveryaddressesValidation.createDeliveryAddresses),
    deliveryaddressesController.createDeliveryAddresses
);

// list
router.get(
    "/list",
    deliveryaddressesController.deliveryAddressesList
);

// update
router.put(
    "/update-deliveryaddresses/:deliveryaddressesId",
    deliveryaddressesController.updateRecode
);

// delete
router.delete(
    "/delete-deliveryaddresses/:deliveryaddressesId",
    deliveryaddressesController.deleteRecode
);

module.exports = router;
