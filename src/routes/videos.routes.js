const { Router } = require("express");
const router = Router();
const {
  createNewVideo,
  deleteVideos,
} = require("../controllers/videos.controllers");

router.post("/videos", createNewVideo);

router.delete("/videos/:videoId", deleteVideos);

module.exports = router;
