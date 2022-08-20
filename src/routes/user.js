const express = require("express");
const {
  requireSignin,
  adminMiddleware,
  userMiddleware,
  uploadCloud,
} = require("../common-middleware");
const {
  updateUser,
  getUsers,
  deleteUserById,
  updateUserInfo,
  getUserById,
} = require("../controllers/user");

const router = express.Router();

router.post("/update", requireSignin, updateUser);
router.post(
  "/updateUserInfo",
  requireSignin,
  userMiddleware,
  uploadCloud.single("profilePicture"),
  updateUserInfo
);
router.post("/delete", requireSignin, adminMiddleware, deleteUserById);
router.get("/get", requireSignin, getUserById);

module.exports = router;
