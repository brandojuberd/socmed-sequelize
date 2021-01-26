const UserController = require("../controllers/userController");

const router = require("express").Router();

router.get("/", UserController.showUsers)

router.get("/register", UserController.showRegister)
router.post("/register", UserController.register)


module.exports = router