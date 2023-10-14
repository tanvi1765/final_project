const { Order } = require("../model");

/**
 * Create order
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createOrder = async (reqBody) => {
    return Order.create(reqBody);
};
const orderList = async (req, res) => {
    return Order.find()
    .populate("User");
};

const getorderById = async (orderId) => {
    return Order.findById(orderId);
};

const updateRecode = async (orderId, updateBody) => {
    return Order.findByIdAndUpdate(orderId, { $set: updateBody });
};

const deleteRecode = async (orderId) => {
    return Order.findByIdAndDelete(orderId);
};

module.exports = {
    createOrder,
    orderList,
    getorderById,
    updateRecode,
    deleteRecode
}