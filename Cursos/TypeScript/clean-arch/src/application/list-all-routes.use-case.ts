import { LatLng, Route } from "../domain/route.entity";
import { IRouteRepository } from "../domain/route.repository";

export class ListAllRoutesUseCase {
    constructor(private routeRepo: IRouteRepository) {}
    async execute() {
        const routes = await this.routeRepo.findAll()
        return routes.map(r => r.toJson());
    }
}

type CreateRouteOutput = {
    id: string;
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    paths?: LatLng[];
}[];