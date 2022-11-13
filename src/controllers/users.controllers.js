const usersServices = require("../services/users.services");

const getAllUsers = async (req, res) => {
  try {
    const result = await usersServices.getUsers();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUsersbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await usersServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, getUsersbyId };
