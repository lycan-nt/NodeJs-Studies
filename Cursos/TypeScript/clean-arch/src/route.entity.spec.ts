import { LatLng, Route, RouteProps } from "./route.entity"

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
    });

    test('updateTitle method', () => {
        const routeProps: RouteProps = {
            title: 'Minha Rota',
            startPosition: {lat:0, lng:1},
            endPoint: {lat:2, lng: 3},
        }
        const route = new Route(routeProps);
        route.updateTitle('Title Update');
        expect(route.title).toBe('Title Update');
    })

    test('updatePosition method', () => {
        const routeProps: RouteProps = {
            title: 'Minha Rota',
            startPosition: {lat: 0, lng: 1},
            endPoint: {lat: 2, lng: 3}
        }
        const route = new Route(routeProps);
        const startPosition: LatLng = {lat: 10, lng: 20};
        const endPoint: LatLng = {lat: 30, lng: 40};
        route.updatePosition(startPosition, endPoint);
        expect(route.startPosition).toBe(startPosition);
        expect(route.endPoint).toBe(endPoint);
    })
})