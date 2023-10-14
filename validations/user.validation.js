const Joi = require("joi");

// cerate user
const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().trim().required(),
        last_name: Joi.string().trim().required(),
        password: Joi.string(),
        phone_no: Joi.number().integer(),
        email: Joi.string().trim().required(),
        role:Joi.string().required(),
    })
};

const sendMail = {
    body: Joi.object({
     email:Joi.string().required().trim().email(),
     subject:Joi.string().required().trim(),
     text:Joi.string().required().trim(),
    })
};
module.exports = {
    createUser,
    sendMail
};