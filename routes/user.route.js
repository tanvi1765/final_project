const express = require("express");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");
const { auth } = require("../middlewares/auth");

const router = express.Router();

// create user
router.post(
    "/register",
    validate(userValidation.createUser),
    userController.createuser
);
//  user list
router.post(
    "/login",
    userController.userList
);
// update
router.get(
    "/alluserlist",
    userController.updateRecode
);

router.post(
    "/send-mail",
    validate(userValidation.sendMail),
    userController.sendMail
);

module.exports = router;