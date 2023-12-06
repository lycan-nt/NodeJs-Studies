import { Route, RouteProps } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory.repository"

describe('RouteImMemoryReposutory Test', () => {

    it('Shoud insert a new route', async () => {
        const repository = new RouteInMemoryRepository();
        const routeProps: RouteProps = {
            title: 'Minha Rota',
            startPosition: {lat: 0, lng: 10},
            endPosition: {lat: 1, lng: 11}
        };
        const route = new Route(routeProps);
        await repository.insert(route);
        expect(repository.itens).toHaveLength(1);
        expect(repository.itens).toStrictEqual([route]);
    });

})