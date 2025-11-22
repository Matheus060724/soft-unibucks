// === IMPORTA OS CLIENTES DO MONGO ===
const { PrismaClient: PrismaMongo } = require("../generated/mongo");
const prismaMongo = new PrismaMongo();

// === IMPORTA O MSSQL PARA OS PEDIDOS ===
const { PrismaClient: PrismaMssql } = require("../generated/mssql");
const prismaMssql = new PrismaMssql();

const { ObjectId } = require("mongodb");

// === CRIAR PEDIDO ===
async function criarPedido({ id_cliente, itens }) {

    // Valida o ObjectId
    if (!ObjectId.isValid(id_cliente)) {
        throw new Error("ID de cliente inválido. Deve ser um ObjectId do MongoDB.");
    }

    // Converte para ObjectId
    const mongoId = new ObjectId(id_cliente);

    // Busca cliente no MongoDB
    const cliente = await prismaMongo.user.findUnique({
        where: { id: mongoId }
    });

    if (!cliente) {
        throw new Error("Cliente não encontrado no MongoDB.");
    }

    // Calcula o total
    const total = itens.reduce(
        (acc, item) => acc + (item.preco * item.quantidade),
        0
    );

    // Cria o pedido no SQL
    const pedido = await prismaMssql.pedido.create({
        data: {
            id_cliente: String(id_cliente), // salva como string
            total,
            status: "aguardando_pagamento",
            itens: {
                create: itens.map(item => ({
                    id_produto: item.id_produto,
                    quantidade: item.quantidade,
                    preco: item.preco
                }))
            }
        },
        include: { itens: true }
    });

    return pedido;
}

module.exports = {
    criarPedido
};
