const express = require("express");
const router = express.Router();
const { getPhotos, deletePhoto, createPhoto } = require("../controllers/workoutController");

// GET all photos
router.get("/", getPhotos);

// DELETE a photo
router.get("/:id", deletePhoto);

// POST a new photo
router.post("/", createPhoto);

module.exports = router;
