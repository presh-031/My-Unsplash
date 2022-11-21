const mongoose = require("mongoose");

const Photo = require("../models/photo");

// GET all photos
const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 });

    res.status(200).json(photos);
  } catch (err) {
    res.status(404).json({
      error: err.message,
    });
  }
};
// DELETE a photo
const deletePhoto = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "No such photo in history",
    });
  }

  //It returns the  document foundanddeleted.
  const photo = await Photo.findOneAndDelete({ _id: id });

  if (!photo) {
    return res.status(400).json({
      error: "No such photo available",
    });
  }

  res.status(200).json(photo);
};

// POST a photo
const createPhoto = async (req, res) => {
  const { label, url } = req.body;
  console.log(req.body);

  try {
    const newPhoto = await Photo.create({
      label,
      url,
    });

    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

module.exports = {
  getPhotos,
  deletePhoto,
  createPhoto,
};
