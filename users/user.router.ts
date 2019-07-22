import * as restify from "restify";
import { Router } from "../common/router";

class UsersRouter extends Router {
    applyRouters(application: restify.Server) {
        application.get("users", (req, res, next) => {
            res.json({
                message: "User ok"
            });
        });
    }
}

export const UsersRouters = new UsersRouter();
