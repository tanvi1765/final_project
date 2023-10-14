const { orderService } = require("../services");

// create
const createOrder = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const order = await orderService.createOrder(reqBody);
        res.status(200).json({
            success: true,
            message: "Order create successfully",
            data: { order },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get order list
const orderList = async (req, res) => {
    try {
        const getList = await orderService.orderList();
        res.status(200).json({
            success: true,
            message: "Get Order list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
// update
const updateRecode = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orderEx = await orderService.getorderById(orderId);
        if (!orderEx) {
            throw new Error("Order not found");
        }

        await orderService.updateRecode(orderId, req.body);
        res.status(200).json({
            success: true,
            message: "Order detiles update successfully!"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orderEx = await orderService.getorderById(orderId);
        if (!orderEx) {
            throw new Error("Order not found");
        };

        await orderService.deleteRecode(orderId, req.body);
        res.status(200).json({
            success: true,
            message: "Order detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOrder,
    orderList,
    updateRecode,
    deleteRecode
};