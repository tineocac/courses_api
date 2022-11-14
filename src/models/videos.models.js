const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("./courses.models");

const Videos = db.define("videos", {
  videoId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: "video_id"
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
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
});

module.exports = Videos;
