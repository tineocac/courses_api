const Categories = require("../models/categories.models");

class categoriesServices {
  static async create(newCategory) {
    try {
      const result = await Categories.create(newCategory);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(categoryId) {
    try {
      const result = await Categories.destroy({ where: { categoryId } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = categoriesServices;
