export type LatLng = {lat: number, lng: number}
export type RouteProps = {
    title: string,
    startPosition:LatLng,
    endPoint: LatLng,
    points?: LatLng[]
}


export class Route {
    public props: Required<RouteProps>;
    constructor(props: RouteProps) {
        this.props = {
            ...props,
            points: props.points || []
        }
    }

    set title(title: string) {
        this.props.title = title;
    }
}

const route = new Route({
    title:'Rota 1', 
    startPosition: {lat: 15, lng: 15}, 
    endPoint: {lat: 20, lng: 20}, 
    points: [
        {lat: 20, lng: 20}, 
        {lat: 20, lng: 20}
    ]
});