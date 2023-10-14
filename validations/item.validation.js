const Joi = require("joi");

// create item
const createItem = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
        Menuitem: Joi.string(),
    })
};

module.exports = {
    createItem
};