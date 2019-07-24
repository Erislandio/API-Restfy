import * as restify from "restify";
import { Router } from "../common/router";
import { User } from "./models/users.model";

class UsersRouter extends Router {
    applyRouters(application: restify.Server) {
        application.get("users", (req, res, next) => {
           User.findAll().then(users => {
               res.json(users)
               return next
           })
        });
    }
}

export const UsersRouters = new UsersRouter();
