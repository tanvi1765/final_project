const { Item } = require("../model");

/**
 * Create Item
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createItem = async (reqBody) => {
    return Item.create(reqBody);
};
const itemList = async (req, res) => {
    return Item.find()
    .populate("Menuitem");
};

const getitemById = async (itemId) => {
    return Item.findById(itemId);
};

const updateRecode = async (itemId, updateBody) => {
    return Item.findByIdAndUpdate(itemId, { $set: updateBody });
};

const deleteRecode = async (itemId) => {
    return Item.findByIdAndDelete(itemId);
};

module.exports = {
    createItem,
    itemList,
    getitemById,
    updateRecode,
    deleteRecode
};