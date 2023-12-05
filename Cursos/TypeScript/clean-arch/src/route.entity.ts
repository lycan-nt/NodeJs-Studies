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

    updateTitle(title: string) {
        this.title = title;
    }

    updatePosition(startPosition: LatLng, endPoint: LatLng) {
        this.startPosition = startPosition;
        this.endPoint = endPoint;
    }

    private set title(title: string) {
        this.props.title = title;
    }

    get title(): string {
        return this.props.title;
    }

    get startPosition(): LatLng {
        return this.props.startPosition;
    }

    private set startPosition(startPosition: LatLng) {
        this.props.startPosition = startPosition;
    }

    get endPoint(): LatLng {
        return this.props.endPoint;
    }

    private set endPoint(endPoint: LatLng) {
        this.props.endPoint = endPoint;
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