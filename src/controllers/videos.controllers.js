const videosServices = require("../services/videos.services");

const createNewVideo = async (req, res) => {
  try {
    const newVideo = req.body;
    const result = await videosServices.create(newVideo);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createNewVideo;
