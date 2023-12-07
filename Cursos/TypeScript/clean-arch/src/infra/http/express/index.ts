import express, {Express, Request, Response} from 'express';
import { CreateRouteUseCase } from '../../../application/create-route.use-case';
import { RouteInMemoryRepository } from '../../db/route-in-memory.repository';
import { ListAllRoutesUseCase } from '../../../application/list-all-routes.use-case';

const app: Express = express();
app.use(express.json())
const repository = new RouteInMemoryRepository();
const port = process.env.PORT || 3000;

app.post('/routes', async (req: Request, res: Response) => {
    const createUseCase = new CreateRouteUseCase(repository);
    const output = await createUseCase.execute(req.body);
    res.status(201).json(output);
});

app.get('/routes', async (req: Request, res: Response) => {
    const listAllUseCase = new ListAllRoutesUseCase(repository);
    const output = await listAllUseCase.execute();
    res.json(output);
});

app.listen(port, () => {
    console.log('Server On in port: ', port);
})

