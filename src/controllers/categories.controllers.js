const categoriesServices = require("../services/categories.services");

const createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const result = await categoriesServices.create(newCategory);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createCategory;
