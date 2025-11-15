const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    async loginOrCreate(data) {
        const user = await prisma.user.findUnique({
            where: { email: data.email }
        });

        if (user) {
            return {
                status: 200,
                data: { message: "Login com sucesso", user }
            };
        }

        const newUser = await prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                CPF: data.CPF,
                telefone: data.telefone
            }
        });

        return {
            status: 201,
            data: { message: "Usuário criado", user: newUser }
        };
    },

    async listUsers() {
        return await prisma.user.findMany();
    }
};