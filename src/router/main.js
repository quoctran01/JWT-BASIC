const express = require("express");
const router = express.Router();
const { login, dashboard } = require("../controllers/mainController");
const authenticationMiddleware = require("../middleware/authMid");

router.route("/login").post(login);
router.route("/dashboard").get(authenticationMiddleware, dashboard);

module.exports = router;
