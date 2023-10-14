const { Deliveries } = require("../model");

/**
 * Create deliveries
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createDeliveries = async (reqBody) => {
    return Deliveries.create(reqBody);
};
const deliveriesList = async (req, res) => {
    return Deliveries.find()
    .populate("Order")
    .populate("Deliverydrivers");
};

const getdeliveriesById = async (deliveriesId) => {
    return Deliveries.findById(deliveriesId);
};

const updateRecode = async (deliveriesId, updateBody) => {
    return Deliveries.findByIdAndUpdate(deliveriesId, { $set: updateBody });
};

const deleteRecode = async (deliveriesId) => {
    return Deliveries.findByIdAndDelete(deliveriesId);
};

module.exports = {
    createDeliveries,
    deliveriesList,
    getdeliveriesById,
    updateRecode,
    deleteRecode
};