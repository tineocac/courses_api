const { Router } = require("express");
const {
  createCategory,
  deleteCategories,
} = require("../controllers/categories.controllers");
const router = Router();

router.post("/categories", createCategory);

router.delete("/categories/:categoryId", deleteCategories);

module.exports = router;
