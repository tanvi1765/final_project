const { orderitemService } = require("../services");

// create order item
const createOrderitem = async (req, res) => {
    try {
        const reqBody = req.body;

        const orderitem = await orderitemService.createOrderitem(reqBody);
        res.status(200).json({
            success: true,
            message: "Orderitem create successfully!",
            data: { orderitem },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get orderitem list
const orderitemList = async (req, res) => {
    try {
        const getList = await orderitemService.orderitemList();
        res.status(200).json({
            success: true,
            message: "Get orderitem list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const orderitemId = req.params.orderitemId;

        const orderitemEx = await orderitemService.getorderitemById(orderitemId);
        if (!orderitemEx) {
            throw new Error("Orderitem not found");
        }

        await orderitemService.updateRecode(orderitemId, req.body);
        res.status(200).json({
            success: true,
            message: "Orderitem detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const orderitemId = req.params.orderitemId;

        const orderitemEx = await orderitemService.getorderitemById(orderitemId);
        if (!orderitemEx) {
            throw new Error("Orderitem not found");
        };

        await orderitemService.deleteRecode(orderitemId, req.body);
        res.status(200).json({
            success: true,
            message: "Orderitem detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOrderitem,
    orderitemList,
    updateRecode,
    deleteRecode
};