const usersServices = require("../services/users.services");

const getAllUsers = async (req, res) => {
  try {
    const result = await usersServices.getUsers();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers };
