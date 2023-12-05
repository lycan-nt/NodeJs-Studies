import { Route, RouteProps } from "./route.entity"

describe('Route Tests', () => {
    test('constructor', () => {
        let routeProps: RouteProps = {
            title: 'Minha Rota',
            startPosition: {lat:0, lng: 1},
            endPoint: {lat: 2, lng: 3},
        }
        let route = new Route(routeProps);
        expect(route.props).toStrictEqual({
            ...routeProps, points: []
        })

        routeProps = {
            title: 'Minha Rota',
            startPosition: {lat: 0, lng: 1},
            endPoint: {lat: 2, lng: 3},
            points: [
                {lat: 10, lng: 11}
            ]
        }
        route = new Route(routeProps);
        expect(route.props).toStrictEqual({
            ...routeProps, points: [
                {lat: 10, lng: 11}
            ]
        })
    })
})