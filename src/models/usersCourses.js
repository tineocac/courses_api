const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Courses = require("./courses.models");

const UsersCourses = db.define(
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
        key: "userId",
        model: Users,
      },
      field: "user_id",
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "courseId",
        model: Courses,
      },
      field: "course_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UsersCourses;
