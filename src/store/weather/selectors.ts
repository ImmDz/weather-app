import { WeatherStore } from "../../types/Weather";
import { RootStore } from "../rootReducer";

export const getWeather = (store: RootStore): WeatherStore["weatherData"] => store.weather.weatherData;