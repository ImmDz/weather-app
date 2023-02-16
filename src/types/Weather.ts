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

export interface WeatherError {
    cod: string;
    message: string;
}

export interface WeatherStore {
    weatherData: WeatherData | null;
}