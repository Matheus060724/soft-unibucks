const { PrismaClient } = require('../generated/mssql');
const prismaMssql = new PrismaClient();

async function criarPedido({ id_cliente, itens }) {
    const total = itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

    const pedido = await prismaMssql.pedido.create({
        data: {
            id_cliente,
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
        include: {
            itens: true
        }
    });

    return pedido;
}

async function listarCozinha() {
    return await prismaMssql.pedido.findMany({
        where: {
            status: { in: ["pago", "em_preparo"] }
        },
        include: { itens: true }
    });
}

async function atualizarStatus(id_pedido, status) {
    return await prismaMssql.pedido.update({
        where: { id_pedido },
        data: { status }
    });
}

async function listarTodos() {
    return await prismaMssql.pedido.findMany({
        include: { itens: true }
    });
}


module.exports = {
    criarPedido,
    listarCozinha,
    atualizarStatus,
    listarTodos
};