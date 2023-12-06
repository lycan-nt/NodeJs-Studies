import { Route } from "./route.entity";

export interface IRouteRepository {
    insert(route: Route): Promise<void>;
}