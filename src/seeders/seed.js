const db = require("../utils/database");
const Users = require("../models/users.models");
const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");
const UsersCourses = require("../models/usersCourses");

const users = [
  {
    firstName: "Carlos",
    lastName: "Tineo",
    email: "carlos@gmail.com",
    password: "1234",
  },
];

const categories = [
  {
    name: "Programming",
  },
  {
    name: "Graphic Design",
  },
];

const courses = [
  {
    title: "CSS",
    description: "Learn basic CSS",
    instructor: "Brenda Gonzalez",
    categoryId: 1,
  },
  {
    title: "HTML",
    description: "Learn basic HTML",
    instructor: "Brenda Gonzalez",
    categoryId: 1,
  },
];

const videos = [
  {
    title: "Learn basic CSS",
    url: "https://platzi.com/cursos/css-grid/",
    courseId: 1,
  },
  {
    title: "Learn basic HTML",
    url: "https://platzi.com/cursos/css-grid/",
    courseId: 2,
  },
];

const usersCourses = [
  {
    userId: 1,
    courseId: 1,
  },
  {
    userId: 1,
    courseId: 2,
  },
];

db.sync().then(() => {
  users.forEach((user) => Users.create(user));
  console.log("Seeder user succesfully created");
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
    console.log("Seeder category succesfully created");
  }, 100);
  setTimeout(() => {
    courses.forEach((course) => Courses.create(course));
    console.log("Seeder course succesfully created");
  }, 200);
  setTimeout(() => {
    videos.forEach((video) => Videos.create(video));
    console.log("Seeder video succesfully created");
  }, 300);
  setTimeout(() => {
    usersCourses.forEach((pivote) => UsersCourses.create(pivote));
    console.log("Seeder pivote table succesfully created");
  }, 400);
});
