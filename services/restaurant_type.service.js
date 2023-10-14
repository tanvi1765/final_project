const { Restauranttype } = require("../model");

/**
 * Create restaurant type
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createRestauranttype = async (reqBody) => {
    return Restauranttype.create(reqBody);
};

const restauranttypeList = async (req, res) => {
    return Restauranttype.find();
};

const deleteRecode = async (restauranttypeId) => {
    return Restauranttype.findByIdAndDelete(restauranttypeId);
};

const updateRecode = async (restauranttypeId, updateBody) => {
    return Restauranttype.findByIdAndUpdate(restauranttypeId, { $set: updateBody });
};

const getrestauranttypeById = async (restauranttypeId) => {
    return Restauranttype.findById(restauranttypeId);
};

module.exports = {
    createRestauranttype,
    restauranttypeList,
    deleteRecode,
    updateRecode,
    getrestauranttypeById
}