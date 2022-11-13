const db = require("../utils/database");
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const UsersCouses = require("../models/usersCourses");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");

const users = [
  {
    firstName: "Carlos",
    lastName: "Tineo",
    email: "carlos@gmail.com",
    password: "1234",
  },
];

const usersCourses = [
  {
    userId: 1,
    courseId: 1,
  },
];

const courses = [
  {
    title: "CSS",
    description: "Learn basic CSS",
    instructor: "Brenda Gonzalez",
  },
];

const categories = [
  {
    name: "programming",
    courseId: 1,
  },
];

const videos = [
  {
    title: "Learn basic CSS",
    url: "https://platzi.com/cursos/css-grid/",
    courseId: 1,
  },
];

db.sync()
  .then(() => {
    users.forEach((user) => Users.create(user));
    console.log("Seeder user succesfully created");
  })
  .catch((error) => console.log(error))
  .then(() => {
    courses.forEach((course) => Courses.create(course));
    console.log("Seeder course succesfully created");
  })
  .catch((error) => console.log(error))
  .then(() => {
    usersCourses.forEach((pivote) => UsersCouses.create(pivote));
    console.log("Seeder pivote table succesfully created");
  })
  .catch((error) => console.log(error))
  .then(() => {
    categories.forEach((category) => Categories.create(category));
    console.log("Seeder category succesfully created");
  })
  .catch((error) => console.log(error))
  .then(() => {
    videos.forEach((video) => Videos.create(video));
    console.log("Seeder video succesfully created");
  })
  .catch((error) => console.log(error));
