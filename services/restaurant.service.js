const { Restaurant } = require("../model");

/**
 * Create restaurant
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createRestaurant = async (reqbody) => {
    return Restaurant.create(reqbody)
};

const restaurantList = async (req, res) => {
    return Restaurant.find()
    .populate("Owner")
    .populate("Restauranttype")
    .populate("Image");
};

const deleteRecode = async (restaurantId) => {
    return Restaurant.findByIdAndDelete(restaurantId);
};

const updateRecode = async (restaurantId, updateBody) => {
    return Restaurant.updateRecode(restaurantId, { $set: updateBody });
};

const getrestaurantById = async (restaurantId) => {
    return Restaurant.findById(restaurantId);
};

module.exports = {
    createRestaurant,
    restaurantList,
    deleteRecode,
    updateRecode,
    getrestaurantById
};