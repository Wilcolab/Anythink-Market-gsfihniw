/**
 * GET /
 * Retrieves all comments from the database.
 * @route GET /api/comments
 * @returns {Object} 200 - An array of comment objects
 * @returns {Error} 500 - Internal server error
 */

/**
 * DELETE /:commentId
 * Deletes a comment by its ID.
 * @route DELETE /api/comments/:commentId
 * @param {string} commentId - The ID of the comment to delete
 * @returns {Status} 200 - Successfully deleted
 * @returns {Error} 500 - Internal server error
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
//Hey Github Copilot, please write the code for CRUD operations for comments in an Express.js application using Mongoose.
router.get("/", (req,res ) => {
  Comment.find()
    .then(comments => {
      res.json({ comments });
    })
    .catch(err => {
      res.status(500).json({ error: "Internal server error" });
    });
});

router.delete("/:commentId", async (req, res, next) => {
    try {
        await Comment.findByIdAndRemove(req.params.commentId);
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});