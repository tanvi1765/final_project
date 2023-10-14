const { DeliveryAddresses } = require("../model");

/**
 * Create Delivery Addresses
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createDeliveryAddresses = async (reqBody) => {
    return DeliveryAddresses.create(reqBody);
};
const deliveryAddressesList = async (req, res) => {
    return DeliveryAddresses.find()
    .populate("User")
    .populate("City")
    .populate("State");
};

const getdeliveryaddressesById = async (deliveryaddressesId) => {
    return DeliveryAddresses.findById(deliveryaddressesId);
};

const updateRecode = async (deliveryaddressesId, updateBody) => {
    return DeliveryAddresses.findByIdAndUpdate(deliveryaddressesId, { $set: updateBody });
};

const deleteRecode = async (deliveryaddressesId) => {
    return DeliveryAddresses.findByIdAndDelete(deliveryaddressesId);
};

module.exports = {
    createDeliveryAddresses,
    deliveryAddressesList,
    getdeliveryaddressesById,
    updateRecode,
    deleteRecode
};