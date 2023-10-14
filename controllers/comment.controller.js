const { commentService } = require("../services");

// create
const createComment = async (req, res) => {
    try {
        const reqBody = req.body;

        const comment = await commentService.createComment(reqBody);
        res.status(200).json({
            success: true,
            message: "Comment create successfully!",
            data: { comment },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get opening hours list
const commentList = async (req, res) => {
    try {
        const getList = await commentService.commentList();
        res.status(200).json({
            success: true,
            message: "Get comment list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const commentId = req.params.commentId;

        const commentEx = await commentService.getcommentById(commentId);
        if (!commentEx) {
            throw new Error("Comment not found");
        }

        await commentService.updateRecode(commentId, req.body);
        res.status(200).json({
            success: true,
            message: "Comment detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const commentId = req.params.commentId;

        const commentEx = await commentService.getcommentById(commentId);
        if (!commentEx) {
            throw new Error("Comment not found");
        };

        await commentService.deleteRecode(commentId, req.body);
        res.status(200).json({
            success: true,
            message: "Comment detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createComment,
    commentList,
    updateRecode,
    deleteRecode
};