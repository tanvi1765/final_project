const Joi = require("joi");

// create city
const createCity = {
    body: Joi.object().keys({
        city_name: Joi.string().trim().required(),
        State: Joi.string(),
        Country: Joi.string(),
    })
};

module.exports = {
    createCity
};