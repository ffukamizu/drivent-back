import { Router } from 'express';
import { getTickets, getTicketsType, createTicket } from '@/controllers';
import { ticketSchema } from '@/schemas';
import { authenticateToken, validateBody } from '@/middlewares';

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken);
ticketsRouter.get('/types', getTicketsType);
ticketsRouter.get('/', getTickets);
ticketsRouter.post('/', validateBody(ticketSchema), createTicket);

export { ticketsRouter };
