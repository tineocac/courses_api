const Users = require("../models/users.models");
const Categories = require("./categories.models");
const Courses = require("./courses.models");
const UsersCouses = require("./usersCourses");
const Videos = require("./videos.models");

const initModels = () => {
  Users.hasMany(UsersCouses, { foreignKey: "user_id" });
  UsersCouses.belongsTo(Users, { foreignKey: "user_id" });

  Courses.hasMany(UsersCouses, { foreignKey: "course_id" });
  UsersCouses.belongsTo(Courses, { foreignKey: "course_id" });

  Categories.hasMany(Courses, { foreignKey: "category_id" });
  Courses.belongsTo(Categories, { foreignKey: "category_id" });

  Courses.hasMany(Videos, { foreignKey: "course_id" });
  Videos.belongsTo(Courses, { foreignKey: "course_id" });
};

module.exports = initModels;
