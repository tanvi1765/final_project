const express = require("express");
const { orderValidation } = require("../validations");
const { orderController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-order",
    validate(orderValidation.createOrder),
    orderController.createOrder
);

// list
router.get(
    "/list",
    orderController.orderList
);

// update
router.put(
    "/update-order/:orderId",
    orderController.updateRecode
);

// delete
router.delete(
    "/delete-order/:orderId",
    orderController.deleteRecode
);

module.exports = router;
