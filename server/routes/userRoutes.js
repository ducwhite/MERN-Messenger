const router = require("express").Router();
const { register } = require("../controllers/usersController");

router.post("/register", register);

module.exports = router;
