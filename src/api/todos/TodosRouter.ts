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
 *        description: An single todo item
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
           .delete(async (req, res) => {
                if (!req.params.id) {
                    res.status(400).send('Invalid request an id needs to be present')
                }

                if (!Number.parseInt(req.params.id, 10)) {
                    res.status(400).send('Invalid request an id needs to be an integer')
                }

                try {
                    let result = await TodosAPI.deleteById(req.params.id);
                    res.status(200).send('Todo deleted');
                } catch {
                    res.status(500).send('Could not delete');
                }
           })
           .patch(async (req, res) => {
                if (!req.params.id) {
                    res.status(400).send('Invalid request an id needs to be present')
                }

                if (!Number.parseInt(req.params.id, 10)) {
                    res.status(400).send('Invalid request an id needs to be an integer')
                }
                //TODO check the other parameters as well  
                try {
                    await TodosAPI.update(req.body.text, req.body.done, req.params.id);
                    res.status(200).send('Todo updated');
                } catch {
                    res.status(500).send('Could not update');
                }
           });

TodosRouter.route('/new')
            .post(async (req, res) => {
                if (!req.body.text && req.body.text.length > 1) {
                    res.status(400).send('Property "text" required for end point ')
                }
                try {
                    await TodosAPI.create(req.body.text);
                    res.status(200).send('Todo created');
                } catch {
                    res.status(500).send('Could not create');
                }
            })

export default TodosRouter;