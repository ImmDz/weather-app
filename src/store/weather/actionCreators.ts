import { WeatherData } from "../../types/Weather";
import { ACTION_TYPES } from "./types";
import { fetchData } from "../../api";
import { Dispatch } from "redux";

export const getWeatherSuccess = (data: WeatherData) => ({
    type: ACTION_TYPES.GET_WEATHER_SUCCESS,
    payload: data
})

export const fetchWeather = (city: string) => (dispatch: Dispatch) => {
    fetchData(city).then((data) => {
        dispatch(getWeatherSuccess(data))
    })
}