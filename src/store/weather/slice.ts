import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherState, LOAD_STATUSES, WeatherData } from "../../types/Weather";
import { fetchData } from '../../api';

const initialState: WeatherState = {
    weatherData: null,
    loadstatus: LOAD_STATUSES.UNKNOWN,
    error: {
        message: '',
    },
}

const getWeather = createAsyncThunk("weather", fetchData);

const { reducer, actions: sliceActions } = createSlice({
    name: "weather",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getWeather.pending, (state) => {
            state.loadstatus = LOAD_STATUSES.LOADING;
            console.log(state.loadstatus);
        });
        builder.addCase(getWeather.rejected, (state, action) => {
            state.error.message = action.error.message!;
            state.loadstatus = LOAD_STATUSES.ERROR;
            console.log(state.loadstatus);
        })
        builder.addCase(getWeather.fulfilled, (state, action: PayloadAction<WeatherData>) => {
            state.loadstatus = LOAD_STATUSES.LOADED;
            state.weatherData = action.payload;
            console.log(state.loadstatus);
        })
    }
})
export { reducer };
export const actions = { ...sliceActions, getWeather };