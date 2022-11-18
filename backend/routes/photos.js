const express = require("express");
const router = express.Router();
const { getPhotos, deletePhoto, createPhoto } = require("../controllers/photos");

// GET all photos
router.get("/", getPhotos);

// DELETE a photo
router.get("/:id", deletePhoto);

// POST a new photo
router.post("/", createPhoto);

module.exports = router;
