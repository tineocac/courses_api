const { Router } = require("express");
const router = Router();
const createNewVideo = require("../controllers/videos.controllers");

router.post("/videos", createNewVideo);

module.exports = router;
