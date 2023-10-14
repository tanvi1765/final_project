const express = require("express");
const { cartValidation } = require("../validations");
const { cartController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-cart",
    validate(cartValidation.createCart),
    cartController.createCart
);

// list
router.get(
    "/list",
    cartController.cartList
);

// update
router.put(
    "/update-cart/:cartId",
    cartController.updateRecode
);

// delete
router.delete(
    "/delete-cart/:cartId",
    cartController.deleteRecode
);

module.exports = router;
