import express, {Express, Request, Response} from 'express';
import { CreateRouteUseCase } from '../../../application/create-route.use-case';
import { RouteInMemoryRepository } from '../../db/route-in-memory.repository';

const app: Express = express();
const repository = new RouteInMemoryRepository();

app.post('/routes', async (req: Request, res: Response) => {
    const createUseCase = new CreateRouteUseCase(repository);
    const output = await createUseCase.execute(req.body);
    res.status(201).json(output);
});