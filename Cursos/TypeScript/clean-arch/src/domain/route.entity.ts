export type LatLng = {lat: number, lng: number}
export type RouteProps = {
    title: string,
    startPosition:LatLng,
    endPosition: LatLng,
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

    updatePosition(startPosition: LatLng, endPosition: LatLng) {
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }

    updatePoint(points: LatLng[]) {
        this.points = points;
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

    get endPosition(): LatLng {
        return this.props.endPosition;
    }

    private set endPosition(endPosition: LatLng) {
        this.props.endPosition = endPosition;
    }

    get points(): LatLng[] {
        return this.props.points;
    }

    private set points(points: LatLng[]) {
        this.props.points = points;
    }

    toJson() {
        return this.props
    }
}

const route = new Route({
    title:'Rota 1', 
    startPosition: {lat: 15, lng: 15}, 
    endPosition: {lat: 20, lng: 20}, 
    points: [
        {lat: 20, lng: 20}, 
        {lat: 20, lng: 20}
    ]
});