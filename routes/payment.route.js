const express = require("express");
const { paymentValidation } = require("../validations");
const { paymentController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-payment",
    validate(paymentValidation.createPayment),
    paymentController.createPayment
);

// list
router.get(
    "/list",
    paymentController.paymentList
);

// update
router.put(
    "/update-payment/:paymentId",
    paymentController.updateRecode
);

// delete
router.delete(
    "/delete-payment/:paymentId",
    paymentController.deleteRecode
);

module.exports = router;
