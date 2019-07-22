import * as restify from "restify";
import chalk from "chalk";

const PORT = 3000;

// criar server
const server = restify.createServer({
    name: "meat-api",
    version: "1.0.0"
});

server.get("/hello", (req, res, next) => {
    res.json({
        message: "Hello"
    });
    return next();
});

server.listen(PORT, () => {
    console.log(
        chalk.blue(
            `Server is running on ${chalk.bgGreen.white.bold(
                `http://localhost:${PORT}`
            )}`
        )
    );
});
