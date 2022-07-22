const router = require("express").Router();

const postRoutes = require("./post-routes");
const userRoutes = require("./user-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);

module.exports = router;