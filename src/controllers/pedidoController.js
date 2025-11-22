const pedidoService = require("../services/pedidosServices");

async function criarPedido(req, res) {
    try {
        const dados = req.body;

        if (!dados || Object.keys(dados).length === 0) {
            return res.status(400).json({ erro: "Body vazio. Envie os dados do pedido." });
        }

        const pedido = await pedidoService.criarPedido(dados);
        return res.status(201).json(pedido);

    } catch (err) {
        console.error("Erro ao criar pedido:", err);
        return res.status(500).json({ erro: "Erro interno ao criar pedido" });
    }
}

async function listarCozinha(req, res) {
    try {
        const pedidos = await pedidoService.listarCozinha();
        return res.json(pedidos);

    } catch (err) {
        console.error("Erro ao listar cozinha:", err);
        return res.status(500).json({ erro: "Erro ao listar pedidos da cozinha" });
    }
}

async function atualizarStatus(req, res) {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ erro: "O status é obrigatório." });
        }

        const statusPermitidos = ["pendente", "em preparação", "pronto", "finalizado"];

        if (!statusPermitidos.includes(status)) {
            return res.status(400).json({
                erro: `Status inválido. Use um desses: ${statusPermitidos.join(", ")}`
            });
        }

        const pedidoAtualizado = await pedidoService.atualizarStatus(Number(id), status);
        return res.json(pedidoAtualizado);

    } catch (err) {
        console.error("Erro ao atualizar status:", err);
        return res.status(500).json({ erro: "Erro ao atualizar status" });
    }
}

async function listarTodos(req, res) {
    try {
        const pedidos = await pedidoService.listarTodos();
        return res.json(pedidos);

    } catch (err) {
        console.error("Erro ao listar pedidos:", err);
        return res.status(500).json({ erro: "Erro ao listar pedidos" });
    }
}

module.exports = {
    criarPedido,
    listarCozinha,
    atualizarStatus,
    listarTodos
};
