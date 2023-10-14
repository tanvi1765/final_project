const express = require("express");
const { orderitemValidation } = require("../validations");
const { orderitemController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-orderitem",
    validate(orderitemValidation.createOrderitem),
    orderitemController.createOrderitem
);
// list
router.get(
    "/list",
    orderitemController.orderitemList
);

// update
router.put(
    "/update-orderitem/:orderitemId",
    orderitemController.updateRecode
);
// delete
router.delete(
    "/delete-orderitem/:orderitemId",
    orderitemController.deleteRecode
);

module.exports = router;