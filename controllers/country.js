const { countryService } = require("../services");

// create
const createCountry = async (req, res) => {
    try {
        const reqBody = req.body;

        const country = await countryService.createCountry(reqBody);
        res.status(200).json({
            success: true,
            message: "Country create successfully!",
            data: { country },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get country list
const countryList = async (req, res) => {
    try {
        const getList = await countryService.countryList();
        res.status(200).json({
            success: true,
            message: "Get country list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const countryId = req.params.countryId;

        const countryEx = await countryService.getcountryById(countryId);
        if (!countryEx) {
            throw new Error("country not found");
        }

        await countryService.updateRecode(countryId, req.body);
        res.status(200).json({
            success: true,
            message: "country detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const countryId = req.params.countryId;

        const countryEx = await countryService.getcountryById(countryId);
        if (!countryEx) {
            throw new Error("country not found");
        };

        await countryService.deleteRecode(countryId, req.body);
        res.status(200).json({
            success: true,
            message: "country detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createCountry,
    countryList,
    updateRecode,
    deleteRecode
};