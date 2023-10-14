const express = require("express");
const { restaurantValidation } = require("../validations");
const { restaurantController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/craete-restaurant",
    validate(restaurantValidation.createRestaurant),
    restaurantController.createRestaurant
);

// list
router.get(
    "/list",
    restaurantController.restaurantList
);

// update
router.put(
    "/update/:restaurantId",
    restaurantController.updateRecode
);

// delete
router.delete(
    "/delete-recode/:restaurantId",
    restaurantController.deleteRecode
);
module.exports = router;
