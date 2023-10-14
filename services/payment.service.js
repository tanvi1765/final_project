const { Payment } = require("../model");

/**
 * Create payment
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createPayment = async (reqBody) => {
    return Payment.create(reqBody)
};
const paymentList = async (req, res) => {
    return Payment.find()
    .populate("User")
    .populate("Order");
};

const getpaymentById = async (paymentId) => {
    return Payment.findById(paymentId)
};

const updateRecode = async (paymentId, updateBody) => {
    return Payment.findByIdAndUpdate(paymentId, { $set: updateBody });
};

const deleteRecode = async (paymentId) => {
    return Payment.findByIdAndDelete(paymentId);
};

module.exports = {
    createPayment,
    paymentList,
    getpaymentById,
    updateRecode,
    deleteRecode
}