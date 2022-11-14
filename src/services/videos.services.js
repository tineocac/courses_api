const Videos = require("../models/videos.models");

class videosServices {
  static async create(newVideo) {
    try {
      const result = await Videos.create(newVideo);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = videosServices;
