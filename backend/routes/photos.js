const express = require("express");
const router = express.Router();
const { getPhotos, getPhoto, createPhoto } = require("../controllers/workoutController");

// GET all photos
router.get("/", getPhotos);

// DELETE a photo
router.get("/:id", getPhoto);

// POST a new photo
router.post("/", createPhoto);

module.exports = router;
