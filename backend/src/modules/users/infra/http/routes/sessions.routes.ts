import { Router } from 'express';
import AuthenticateUserService from 'modules/users/services/AuthenticateUserService';
import { container } from 'tsyringe';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
