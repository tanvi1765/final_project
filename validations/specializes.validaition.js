const Joi = require("joi");

// create specializes
const createSpecilalizes = {
    body: Joi.object().keys({
        specilizes_type: Joi.string().trim().required(),
        food_type: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
    })
};
module.exports = {
    createSpecilalizes
};

