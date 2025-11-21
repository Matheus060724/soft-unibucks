const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedidoController");


router.post("/", pedidoController.criarPedido);


router.get("/cozinha", pedidoController.listarCozinha);


router.put("/:id/status", pedidoController.atualizarStatus);


router.get("/", pedidoController.listarTodos);

module.exports = router;