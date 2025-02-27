import { Router } from 'express';
import { getPaymentByTicket, createPaymentToTicket } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { paymentsSchema } from '@/schemas/';

const paymentsRouter = Router();
paymentsRouter.all('/*', authenticateToken);
paymentsRouter.get('/', getPaymentByTicket);
paymentsRouter.post('/process', validateBody(paymentsSchema), createPaymentToTicket);

export { paymentsRouter };
