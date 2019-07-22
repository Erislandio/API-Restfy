import { Server } from "./server/server";
import chalk from "chalk";

const server = new Server();
server
    .bootstrap()
    .then(server => {
        console.log(
            chalk.blue(
                `Server is running on ${chalk.bgGreen.white.bold(
                    `${server.application.url}`
                )}`
            )
        );
    })
    .catch(error => {
        console.log(chalk.bgRed(`Sever failed to start`));
        console.error(error);
        process.exit(1);
    });
