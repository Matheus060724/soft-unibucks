const pedidoService = require("../services/pedidosServices");

async function criarPedido(req, res) {
    try {
        const pedido = await pedidoService.criarPedido(req.body);
        res.status(201).json(pedido);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: "Erro ao criar pedido" });
    }
}

async function listarCozinha(req, res) {
    try {
        const pedidos = await pedidoService.listarCozinha();
        res.json(pedidos);
    } catch {
        res.status(500).json({ erro: "Erro ao listar pedidos da cozinha" });
    }
}

async function atualizarStatus(req, res) {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const pedido = await pedidoService.atualizarStatus(Number(id), status);
        res.json(pedido);
    } catch {
        res.status(500).json({ erro: "Erro ao atualizar status" });
    }
}

async function listarTodos(req, res) {
    try {
        const pedidos = await pedidoService.listarTodos();
        res.json(pedidos);
    } catch {
        res.status(500).json({ erro: "Erro ao listar pedidos" });
    }
}

module.exports = {
    criarPedido,
    listarCozinha,
    atualizarStatus,
    listarTodos
};
