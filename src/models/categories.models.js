const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("./courses.models");

const Categories = db.define(
  "categories",
  {
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "category_id"
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        key: "courseId",
        model: Courses,
      },
      allowNull: false,
      field: "course_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Categories;
