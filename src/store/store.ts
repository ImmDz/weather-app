import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { reducer as weatherReducer } from './weather/slice';

const rootReducer = combineReducers({
    weather: weatherReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true, serializableCheck: false }),
})

export type RootStore = ReturnType<typeof store.getState>;