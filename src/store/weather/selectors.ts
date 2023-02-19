import { WeatherState } from "../../types/Weather";
import { RootStore } from "../store";

export const getWeather = (store: RootStore): WeatherState["weatherData"] => store.weather.weatherData;
export const getError = (store: RootStore): WeatherState["error"] => store.weather.error;
export const getStatus = (store: RootStore): WeatherState["loadstatus"] => store.weather.loadstatus;