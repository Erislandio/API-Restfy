import * as restify from "restify";
import { Router } from "../common/router";
import { User } from "./models/users.model";

class UsersRouter extends Router {
    applyRouters(application: restify.Server) {
        application.get("users", (req, res, next) => {
            User.find().then(users => {
                res.json(users)
                return next()
            })
        });

        application.get('users/:id', (req, res, next) => {
            User.findById(req.params.id).then(user => {
                if (user) {
                    res.json(user)
                    return next()
                }

                res.send(404)
                return next()

            })
        })

        application.get('user', (req, res, next) => {
            const { id } = JSON.parse(req.body)
            User.findById(id).then(response => {
                if (!response) {
                    res.json({ message: "Usuário não encontrado!" })
                }

                res.json(response)
                return next()
            })
        })

        application.post('users', (req, res, next) => {
            let user = new User(req.body)
            try {
                user.save().then(user => {
                    res.json(user)
                })
            } catch (error) {
                res.json(error)
            }
            return next()
        })
    }
}

export const UsersRouters = new UsersRouter();
