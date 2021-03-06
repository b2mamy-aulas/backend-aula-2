const express = require('express');
const router = express.Router();
const controller = require("../controller/animesController");

router.get("/", controller.listarTodosAnimes);
router.get("/:id", controller.pesquisaPorId);
router.post("/", controller.salvarAnime);

module.exports = router;
