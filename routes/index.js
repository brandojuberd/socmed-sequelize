const Controller = require("../controllers/controller");
const UserController = require("../controllers/userController");

const router = require("express").Router();

router.get("/", Controller.home)

router.get("/register", UserController.showRegister)
router.post("/register", UserController.register)


module.exports = router