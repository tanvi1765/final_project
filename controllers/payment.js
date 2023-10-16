const { paymentService } = require("../services");

// create
const createPayment = async (req, res) => {
    try {
        const reqBody = req.body;
        const payment = await paymentService.createPayment(reqBody);
        res.status(200).json({
            success: true,
            message: "payment create successfully!",
            data: { payment }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//get payment list
const paymentList = async (req, res) => {
    try {
        const getList = await paymentService.paymentList();
        res.status(200).json({
            success: true,
            message: "Payment list get successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;
        const paymentEx = await paymentService.getPaymentById(paymentId);
        if (!paymentEx) {
            throw new Error("Payment not Found");
        };
        await paymentService.updateRecode(paymentId, req.Body);
        res.status(200).json({
            success: true,
            message: "payment update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const paymentId = res.params.paymentId;

        const paymentEx = await paymentService.getPaymentById(paymentId);
        if (!paymentEx) {
            throw new Error("Payment detiles not found")
        }
        await paymentService.deleteRecode(paymentId);
        res.status(200).json({
            success: false,
            message: "Payment detiles delete successfully"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createPayment,
    paymentList,
    updateRecode,
    deleteRecode
};