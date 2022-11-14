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

const deleteVideos = async (req, res) => {
  try {
    const { videoId } = req.params;
    const result = await videosServices.delete(videoId);
    res.status(200).json(result);
  } catch (error) {
    console.log(errro);
  }
};

module.exports = { createNewVideo, deleteVideos };
