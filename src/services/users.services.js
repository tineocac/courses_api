const Users = require("../models/users.models");

class usersServices {
  static async getUsers() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = usersServices;
