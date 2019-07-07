import express from "express";
import UsersAPI from "./UsersAPI";

const UsersRouter = express.Router({mergeParams: true});

UsersRouter.route("/username-available")
           .post(async (req, res) => {
                if (!req.body.username) {
                    res.status(400).send("Parameter username required!");
                }
                try {
                    const result = await UsersAPI.checkIfUsernameAvailable(req.body.username);
                    res.send(result);
                } catch {
                    res.sendStatus(500);
                }
           });

UsersRouter.route("/all")
           .get(async (req, res) => {
               try {
                    const result = await UsersAPI.getAllUsers();
                    res.send(result);
               } catch {
                   res.sendStatus(500);
               }
           });

export default UsersRouter;