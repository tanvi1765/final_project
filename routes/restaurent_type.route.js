const express = require("express");
const { restauranttypeController } = require("../controllers");
const { restauranttypeValidation } = require("../validations");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-restauranttype",
    validate(restauranttypeValidation.createRestauranttype),
    restauranttypeController.createRestauranttype
);

// list
router.get(
    "/list",
    restauranttypeController.restauranttypeList
);

// update
router.put(
    "/update/:restauranttypeId",
    restauranttypeController.updateRecode
);

// delete
router.delete(
    "/delete/:restauranttypeId",
    restauranttypeController.deleteRecode
);
module.exports = router;