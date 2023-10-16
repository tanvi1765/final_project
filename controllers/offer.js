const { offerService } = require("../services");

// create
const createOffer = async (req, res) => {
    try {
        const reqBody = req.body;

        const offer = await offerService.createOffer(reqBody);
        res.status(200).json({
            success: true,
            message: "offer create successfully!",
            data: { offer },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get offer list
const offerList = async (req, res) => {
    try {
        const getList = await offerService.offerList();
        res.status(200).json({
            success: true,
            message: "Get offer list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const offerId = req.params.offerId;

        const offerEx = await offerService.getofferById(offerId);
        if (!offerEx) {
            throw new Error("offer not found");
        }

        await offerService.updateRecode(offerId, req.body);
        res.status(200).json({
            success: true,
            message: "offer detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const offerId = req.params.offerId;

        const offerEx = await offerService.getofferById(offerId);
        if (!offerEx) {
            throw new Error("offer not found");
        };

        await offerService.deleteRecode(offerId, req.body);
        res.status(200).json({
            success: true,
            message: "offer detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOffer,
    offerList,
    updateRecode,
    deleteRecode
};