const { PrismaClient } = require('../generated/mongo');
const mongo = new PrismaClient();

module.exports = {
    async loginOrCreate(data) {

        const user = await mongo.user.findUnique({
            where: { email: data.email }
        });

        // 2. Se existir, apenas retorna
        if (user) {
            return {
                status: 200,
                data: { message: "Login com sucesso", user }
            };
        }

        const payload = {
            email: data.email,
        };

        if (data.name) payload.name = data.name;
        if (data.CPF) payload.CPF = data.CPF;
        if (data.telefone) payload.telefone = data.telefone;

        const newUser = await mongo.user.create({
            data: payload
        });

        return {
            status: 201,
            data: { message: "Usuário criado", user: newUser }
        };
    },

    async listUsers() {
        return await mongo.user.findMany();
    }
};
