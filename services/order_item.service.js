const { Orderitem } = require("../model");

/**
 * Create orderitem
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createOrderitem = async (reqBody) => {
    return Orderitem.create(reqBody);
};
const orderitemList = async (req, res) => {
    return Orderitem.find()
    .populate("Order")
    .populate("Item");
};

const getorderitemById = async (orderitemId) => {
    return Orderitem.findById(orderitemId);
};

const updateRecode = async (orderitemId, updateBody) => {
    return Orderitem.findByIdAndUpdate(orderitemId, { $set: updateBody });
};

const deleteRecode = async (orderitemId) => {
    return Orderitem.findByIdAndDelete(orderitemId);
};

module.exports = {
    createOrderitem,
    orderitemList,
    getorderitemById,
    updateRecode,
    deleteRecode
};