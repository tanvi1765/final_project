const Joi = require("joi");

//Restaurant img validation
const createImage = {
    body: Joi.object().keys({
        image_name: Joi.string().trim().required(),
        image: Joi.string().trim().required(),
    })
};

module.exports = {
    createImage
};