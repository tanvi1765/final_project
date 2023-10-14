const { Cart } = require("../model");

/**
 * Create cart
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createCart = async (reqBody) => {
    return Cart.create(reqBody);
};
const cartList = async (req, res) => {
    return Cart.find()
    .populate("User");
};

const getcartById = async (cartId) => {
    return Cart.findById(cartId);
};

const updateRecode = async (cartId, updateBody) => {
    return Cart.findByIdAndUpdate(cartId, { $set: updateBody });
};

const deleteRecode = async (cartId) => {
    return Cart.findByIdAndDelete(cartId);
};

module.exports = {
    createCart,
    cartList,
    getcartById,
    updateRecode,
    deleteRecode
};