const express = require('express');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use((req, res, next) => {
    console.log(`\n[${req.method}] ${req.url}`);

    if (req.body && typeof req.body === "object" && Object.keys(req.body).length > 0) {
        console.log("Body:", req.body);
    }

    next();
});
app.use(session({
    secret: "unibucks",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        secure: false
    }
}));
app.use('/users', userRoutes);


app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});