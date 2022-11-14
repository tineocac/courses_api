const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Categories = require("./categories.models");

const Courses = db.define("courses", {
  courseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: "course_id",
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  instructor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      key: "categoryId",
      model: Categories,
    },
    field: "category_id",
  },
});

module.exports = Courses;
