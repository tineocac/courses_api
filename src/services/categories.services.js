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
}

module.exports = categoriesServices;
