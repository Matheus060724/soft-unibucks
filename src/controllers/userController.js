const userService = require('../services/userServices');

module.exports = {
    async loginOrCreate(req, res) {
        try {
            const result = await userService.loginOrCreate(req.body);

            req.session.userId = result.data.user.id;
            console.log("Sessão ativa", req.session.userId);

            return res.status(result.status).json(result.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno no servidor" });
        }
    },

    async listUsers(req, res) {
        try {
            const users = await userService.listUsers();
            return res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno no servidor" });
        }
    }
};
