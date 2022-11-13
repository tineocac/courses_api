const { Router } = require("express");
const {
  getAllUsers,
  getUsersbyId,
} = require("../controllers/users.controllers");
const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUsersbyId);

module.exports = router;
