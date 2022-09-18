const express = require("express");
const artistsRouter = express.Router();

const { getAllArtistsInGenre } = require('../services/artists')

artistsRouter.get("/", getAllArtistsInGenre);

module.exports = artistsRouter;
