import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository"
import { CreateRouteUseCase } from "./create-route.use-case";

describe('CreateRouteUseCase Tests', () => {
    it('should create a new route', async () => {
        const repository = new RouteInMemoryRepository();
        const createUseCase = new CreateRouteUseCase(repository);
        const output = await createUseCase.execute({
            title: 'My Title',
            startPosition: {lat: 1, lng: 10},
            endPosition: {lat: 2, lng: 20}
        });
        expect(repository.itens).toHaveLength(1);
        expect(output).toStrictEqual({
            id: repository.itens[0].id,
            title: 'My Title',
            startPosition: {lat: 1, lng: 10},
            endPosition: {lat: 2, lng: 20},
            points: []
        });
    })
})