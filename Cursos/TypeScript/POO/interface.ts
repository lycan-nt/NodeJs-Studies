interface Location {
    latitude: number,
    longitude: number,
    readonly numberLocation: number

    getLocation(): string;
}

const getLocation = (location: Location): string => {
    return `${location.latitude} - ${location.longitude};`
}

// const location = {
//     latitude: 123,
//     longitude: 321
// }
// getLocation(location);

// const location: Location = {
//     latitude: 123,
//     longitude: 321,
//     numberLocation: 10
// }
// location.latitude = 567;
// location.numberLocation = 10
// getLocation(location);

class LocationMap implements Location {
    latitude: number;
    longitude: number;
    numberLocation: number;

    constructor(latitude: number, longitude: number, numberLocation: number = 0) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.numberLocation = numberLocation
    }

    getLocation(): string {
        return 'any';
    }
}

class LocationMapBR implements Location {
    latitude: number;
    longitude: number;
    numberLocation: number;

    constructor(latitude: number, longitude: number, numberLocation: number = 0) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.numberLocation = numberLocation
    }

    getLocation(): string {
        return 'any';
    }
}

getLocation(new LocationMap(10,90, 88));
getLocation(new LocationMapBR(11,12,13));

export {}