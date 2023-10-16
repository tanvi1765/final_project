const { deliveriesService } = require("../services");

// create
const createDeliveries = async (req, res) => {
    try {
        const reqBody = req.body;

        const deliveries = await deliveriesService.createDeliveries(reqBody);
        res.status(200).json({
            success: true,
            message: "Deliveries create successfully!",
            data: { deliveries },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get opening hours list
const deliveriesList = async (req, res) => {
    try {
        const getList = await deliveriesService.deliveriesList();
        res.status(200).json({
            success: true,
            message: "Get deliveries list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const deliveriesId = req.params.deliveriesId;

        const deliveriesEx = await deliveriesService.getdeliveriesById(deliveriesId);
        if (!deliveriesEx) {
            throw new Error("Deliveries not found");
        }

        await deliveriesService.updateRecode(deliveriesId, req.body);
        res.status(200).json({
            success: true,
            message: "Deliveries detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const deliveriesId = req.params.deliveriesId;

        const deliveriesEx = await deliveriesService.getdeliveriesById(deliveriesId);
        if (!deliveriesEx) {
            throw new Error("Deliveries not found");
        };

        await deliveriesService.deleteRecode(deliveriesId, req.body);
        res.status(200).json({
            success: true,
            message: "Deliveries detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createDeliveries,
    deliveriesList,
    updateRecode,
    deleteRecode
};