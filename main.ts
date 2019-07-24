import { Server } from "./server/server";
import chalk from "chalk";
import { UsersRouters } from "./users/user.router";

const server = new Server();
server
    .bootstrap([UsersRouters])
    .then(server => {
        console.log(
            chalk.blue(
                `Server is running on ${chalk.bgGreen.white.bold('https://localhost:3000')}`
            )
        );
    })
    .catch(error => {
        console.log(chalk.bgRed(`Server failed to start`));
        console.error(error);
        process.exit(1);
    });
