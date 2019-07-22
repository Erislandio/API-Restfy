import * as restify from "restify";
import { enviroment } from "../common/enviroment";
const PORT = 3000;

export class Server {
    application: restify.Server;

    initRoutes(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: "meat-api",
                    version: "1.0.0"
                });

                // * criar rota
                this.application.get("/hello", (req, res, next) => {
                    res.setHeader("Content-type", "application/json");
                    res.status(200);
                    res.json({
                        message: "Hello"
                    });
                    return next();
                });

                this.application.get("/info", (req, res, next) => {
                    res.json({
                        browser: req.userAgent(),
                        method: req.method,
                        url: req.url,
                        path: req.path(),
                        params: req.query
                    });
                });

                this.application.use(restify.plugins.queryParser());
                this.application.listen(enviroment.server.port, () => {
                    resolve(this.application);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    bootstrap(): Promise<Server> {
        return this.initRoutes().then(() => this);
    }
}
