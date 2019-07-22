import * as restify from "restify";
import chalk from "chalk";
const PORT = 3000;

// * criar server
const server = restify.createServer({
    name: "meat-api",
    version: "1.0.0"
});

// * criar rota
server.get("/hello", (req, res, next) => {
    res.setHeader("Content-type", "application/json");
    res.status(200);
    res.json({
        message: "Hello"
    });
    return next();
});

// * middleware
server.use(restify.plugins.queryParser());

server.get("/info", (req, res, next) => {
    res.json({
        browser: req.userAgent(),
        method: req.method,
        url: req.url,
        path: req.path(),
        params: req.query
    });

    return next()
});

// * server listen
server.listen(PORT, () => {
    console.log(
        chalk.blue(
            `Server is running on ${chalk.bgGreen.white.bold(
                `http://localhost:${PORT}`
            )}`
        )
    );
});
