app.use((req, res, next) => {
    console.log(`\n[${req.method}] ${req.path}`);

    if (req.body && Object.keys(req.body).length > 0) {
        console.log("Body:", req.body);
    }

    next();
});
