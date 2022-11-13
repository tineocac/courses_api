const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Courses = require("./courses.models");

const UsersCouses = db.define(
  "users_courses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id",
        model: Users,
      },
      field: "user_id",
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id",
        model: Courses,
      },
      field: "course_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UsersCouses;
