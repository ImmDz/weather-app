import { WeatherData } from '../../types/Weather';

export enum ACTION_TYPES {
    GET_WEATHER_SUCCESS = "WEATHER/GET_WEATHER_SUCCESS",
}

export type GetWeatherSuccess = {
    type: ACTION_TYPES.GET_WEATHER_SUCCESS,
    payload: WeatherData
}

export type Action = GetWeatherSuccess;