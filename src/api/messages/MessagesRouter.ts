import express from 'express';
import MessagesAPI from './MessagesAPI';

let MessagesRouter = express.Router({mergeParams: true});

MessagesRouter.route('/conversation/:user1/:user2')
          .get(async (req, res) => {
            try {
              let messages = await MessagesAPI.getConversationBetween(req.params.user1, req.params.user2)
              if (messages) {
                res.send(messages);
              } else {
                res.send(404);
              }
            } catch {
              res.sendStatus(500);
            }
          })

export default MessagesRouter;