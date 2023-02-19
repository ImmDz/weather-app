import { FC } from "react";
import { getWeather, getStatus, getError } from "../../store/weather/selectors";
import { useSelector } from "react-redux";
import css from "./styles.module.css";


export const Card: FC = () => {
    const weather = useSelector(getWeather);
    const loadstatus = useSelector(getStatus);
    const error = useSelector(getError);

    if (loadstatus === "ERROR") {
        return <h2>{error.message}</h2>
    }

    return (
        <div className={css.container}>
            <>
                <header>
                    <h1>{weather?.name}</h1>
                    <p>Temp: {weather?.main.temp}</p>
                    <p>Feels like: {weather?.main.feels_like}</p>
                </header>
                <main>
                    <div className={css.main_info}>
                        <p>Humidity: {weather?.main.humidity}</p>
                        <p>Pressure: {weather?.main.pressure}</p>
                        <p>Visibility: {weather?.visibility}</p>
                        <p>Wind: {weather?.wind.speed}</p>
                    </div>
                </main>
            </>
        </div>
    )
}