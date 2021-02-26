import express from 'express';

import { suggestionController } from '../controllers';

const suggestionRouter = express.Router();

suggestionRouter.get('/ping', suggestionController.ping);
suggestionRouter.post('/', suggestionController.addSuggestion);
suggestionRouter.get('/', suggestionController.getSuggestions);

export default suggestionRouter;
