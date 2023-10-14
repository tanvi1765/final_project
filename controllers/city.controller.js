const { cityService } = require("../services");

// create
const createCity = async (req, res) => {
    try {
        const reqBody = req.body;

        const city = await cityService.createCity(reqBody);
        res.status(200).json({
            success: true,
            message: "City create successfully!",
            data: { city },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get opening hours list
const cityList = async (req, res) => {
    try {
        const getList = await cityService.cityList();
        res.status(200).json({
            success: true,
            message: "Get city list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const cityId = req.params.cityId;

        const cityEx = await cityService.getcityById(cityId);
        if (!cityEx) {
            throw new Error("city not found");
        }

        await cityService.updateRecode(cityId, req.body);
        res.status(200).json({
            success: true,
            message: "city detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const cityId = req.params.cityId;

        const cityEx = await cityService.getcityById(cityId);
        if (!cityEx) {
            throw new Error("city not found");
        };

        await cityService.deleteRecode(cityId, req.body);
        res.status(200).json({
            success: true,
            message: "city detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createCity,
    cityList,
    updateRecode,
    deleteRecode
};