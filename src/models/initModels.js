const Users = require("../models/users.models");
const Categories = require("./categories.models");
const Courses = require("./courses.models");
const UsersCourses = require("./usersCourses");
const Videos = require("./videos.models");

const initModels = () => {
  Users.hasMany(UsersCourses, { foreignKey: "user_id" });
  UsersCourses.belongsTo(Users, { foreignKey: "user_id" });

  Courses.hasMany(UsersCourses, { foreignKey: "course_id" });
  UsersCourses.belongsTo(Courses, { foreignKey: "course_id" });

  Categories.hasMany(Courses, { foreignKey: "category_id" });
  Courses.belongsTo(Categories, { foreignKey: "category_id" });

  Courses.hasMany(Videos, { foreignKey: "course_id" });
  Videos.belongsTo(Courses, { foreignKey: "course_id" });
};

module.exports = initModels;
