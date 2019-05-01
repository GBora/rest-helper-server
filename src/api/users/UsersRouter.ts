import express from 'express';
import UsersAPI from './UsersAPI';

let UsersRouter = express.Router({mergeParams: true});

UsersRouter.route('/username-available')
           .post(async (req, res) => {
                if (!req.body.username) {
                    res.status(400).send('Parameter username required!');
                }
                try {
                    let result = await UsersAPI.checkIfUsernameAvailable(req.body.username);
                    res.send(result);
                } catch {
                    res.sendStatus(500);
                }
           })

export default UsersRouter;