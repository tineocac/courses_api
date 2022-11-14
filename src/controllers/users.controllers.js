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
    const { userId } = req.params;
    const result = await usersServices.getById(userId);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUserWithCourses = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await usersServices.getUserJoinCourse(userId);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const createUsers = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await usersServices.create(newUser);
    res.status(201).json({ message: "User succesfully created" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, getUsersbyId, getUserWithCourses, createUsers };
