import * as restify from "restify";
import { enviroment } from "../common/enviroment";
import { Router } from "../common/router";
import * as mongoose from "mongoose";

export class Server {

    application: restify.Server;

    initializeDb() {
        (<any>mongoose.Promise) = global.Promise
        return mongoose.connect(enviroment.db.url, {
            useNewUrlParser: true,
            auth: {
                user: "Erislandio",
                password: "Er1sl@ndio"
            }
        });
    };

    initRoutes(routers: Router[]): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: "meat-api",
                    version: "1.0.0"
                });

                this.application.use(restify.plugins.queryParser());

                // * routers

                for (let router of routers) {
                    router.applyRouters(this.application);
                }

                this.application.listen(enviroment.server.port, () => {
                    resolve(this.application);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    bootstrap(routers: Router[] = []) {
        return this.initializeDb().then((res) => {
            this.initRoutes(routers).then(() => this)
        })
    }
}
