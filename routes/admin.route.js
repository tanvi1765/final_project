const express = require("express");
const { adminValidation } = require("../validations");
const { adminController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-admin",
    validate(adminValidation.createAdmin),
    adminController.createAdmin
);

// list
router.get(
    "/list",
    adminController.adminList
);

// update
router.put(
    "/update-admin/:adminId",
    adminController.updateRecode
);

// delete
router.delete(
    "/delete-admin/:adminId",
    adminController.deleteRecode
);

module.exports = router;
