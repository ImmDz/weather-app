import { WeatherStore } from "../../types/Weather";
import { Action } from './types';
import { ACTION_TYPES } from "./types";

const initialStore: WeatherStore = { weatherData: null };

export const reducer = (store = initialStore, action: Action): WeatherStore => {
    switch (action.type) {
        case ACTION_TYPES.GET_WEATHER_SUCCESS: {
            return { weatherData: action.payload }
        }
        default:
            return store;
    }
}