import { FC } from "react";
import { WeatherData } from "../../types";
import css from "./styles.module.css";

interface CardProps {
    title: string;
    data: WeatherData | null;
}

export const Card: FC<CardProps> = ({ title, data }) => {
    return (
        <div className={css.container}>
            <>
                <header>
                    <h1>{data?.sys.country}</h1>
                    <p>Temp: {data?.main.temp}</p>
                    <p>Feel like: {data?.main.feels_like}</p>
                </header>
                <main>
                    <div className={css.main_info}>
                        <p>Humidity: {data?.main.humidity}</p>
                        <p>Pressure: {data?.main.pressure}</p>
                        <p>Visibility: {data?.visibility}</p>
                        <p>Wind: {data?.wind.speed}</p>
                    </div>
                </main>
                
            </>
        </div>
    )
}