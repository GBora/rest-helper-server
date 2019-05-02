import express from 'express';
import TodosAPI from './TodosAPI';

let TodosRouter = express.Router({mergeParams: true});

TodosRouter.route('/all')
/**
 * @swagger
 * /todos/all:
 *  get:
 *    description: Return all todos
 *    responses:
 *      200:
 *        description: An array of all todo
 *      500:
 *        description: Internal server error
 */
           .get(async (req, res) => {
                try {
                    let todos = await TodosAPI.getAll();
                    res.status(200).send(todos);
                } catch {
                    res.status(500).send('Could not fetch all todos.')
                }
           });

TodosRouter.route('/item/:id')
/**
 * @swagger
 * /todos/item/:id:
 *  get:
 *    description: Return all todos
 *    responses:
 *      200:
 *        description: An array of all todo
 *      500:
 *        description: Internal server error
 */
           .get(async (req, res) => {
                if (!req.params.id) {
                    res.status(400).send('Invalid request an id needs to be present')
                }

                if (!Number.parseInt(req.params.id, 10)) {
                    res.status(400).send('Invalid request an id needs to be an integer')
                }
                try {
                    let todo = await TodosAPI.getById(req.params.id);
                    res.status(200).send(todo);
                } catch {
                    res.status(500).send('Could not fetch todo.')
                }
           })

export default TodosRouter;