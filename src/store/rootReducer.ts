import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as weatherReducer } from './weather/reducer';
import Thunk from "redux-thunk";

const rootReducer = combineReducers({
    weather: weatherReducer,
})

export const store = createStore(rootReducer, applyMiddleware(Thunk));

export type RootStore = ReturnType<typeof store.getState>;