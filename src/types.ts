export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WeatherData {
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    dt: number;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    }
    name: string;
    weather: Weather[];
}

export interface WeatherState {
    data: WeatherData | null;
}

// {
//     "coord": {
//     "lon": -0.1257,
//     "lat": 51.5085
//     },
//     "weather": [
//     {
//     "id": 803,
//     "main": "Clouds",
//     "description": "broken clouds",
//     "icon": "04n"
//     }
//     ],
//     "base": "stations",
//     "main": {
//     "temp": 279.53,
//     "feels_like": 275.93,
//     "temp_min": 278.31,
//     "temp_max": 280.64,
//     "pressure": 1021,
//     "humidity": 89
//     },
//     "visibility": 10000,
//     "wind": {
//     "speed": 5.66,
//     "deg": 240
//     },
//     "clouds": {
//     "all": 81
//     },
//     "dt": 1675027384,
//     "sys": {
//     "type": 2,
//     "id": 2075535,
//     "country": "GB",
//     "sunrise": 1674978233,
//     "sunset": 1675010582
//     },
//     "timezone": 0,
//     "id": 2643743,
//     "name": "London",
//     "cod": 200
//     }