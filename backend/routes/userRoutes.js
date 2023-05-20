const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} = require("../controllers/userController");

const { protectRoute } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protectRoute,getUserProfile)
  .put(protectRoute, updateUserProfile)
  .delete(protectRoute, deleteUserProfile);

module.exports = router;
