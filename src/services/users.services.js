// const Courses = require("../models/courses.models");
const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/usersCourses");

class usersServices {
  static async getUsers() {
    try {
      const result = await Users.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(userId) {
    try {
      const result = await Users.findByPk(userId, {
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUserJoinCourse(userId) {
    try {
      const result = await Users.findOne({
        where: { userId },
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
        include: {
          model: UsersCourses,
          attributes: ["userId", "courseId"],
          include: {
            model: Courses,
            attributes: {
              exclude: ["category_id", "createdAt", "updatedAt"],
            },
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(data, userId) {
    try {
      const result = await Users.update(data, { where: { userId } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = usersServices;
