const Joi = require("joi");

// restaurant type create
const createRestauranttype = {
    body: Joi.object().keys({
        restaurant_type: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
    })
};

module.exports = {
    createRestauranttype
};