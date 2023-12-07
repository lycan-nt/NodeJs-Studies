import { Route } from "../../domain/route.entity";
import { IRouteRepository } from "../../domain/route.repository";

export class RouteInMemoryRepository implements IRouteRepository {
    itens: Route[] = [];
    async insert(route: Route): Promise<void> {
        this.itens.push(route);
    }

    async findAll(): Promise<Route[]> {
        return this.itens;
    }
}