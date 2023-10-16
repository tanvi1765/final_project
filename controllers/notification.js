const { notificationService } = require("../services");

// create
const createNotification = async (req, res) => {
    try {
        const reqBody = req.body;

        const notification = await notificationService.createNotification(reqBody);
        res.status(200).json({
            success: true,
            message: "Notification create successfully!",
            data: { notification },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get opening hours list
const notificationList = async (req, res) => {
    try {
        const getList = await notificationService.notificationList();
        res.status(200).json({
            success: true,
            message: "Get Notification list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const notificationId = req.params.notificationId;

        const notificationEx = await notificationService.getnotificationById(notificationId);
        if (!notificationEx) {
            throw new Error("Notification not found");
        }

        await notificationService.updateRecode(notificationId, req.body);
        res.status(200).json({
            success: true,
            message: "Notification detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const notificationId = req.params.notificationId;

        const notificationEx = await notificationService.getnotificationById(notificationId);
        if (!notificationEx) {
            throw new Error("Notification not found");
        };

        await notificationService.deleteRecode(notificationId, req.body);
        res.status(200).json({
            success: true,
            message: "Notification detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createNotification,
    notificationList,
    updateRecode,
    deleteRecode
};