import { FC, useState, useEffect } from "react";
import { Input, Card } from "./components";
import { WeatherState } from "./types";
import { debounce } from "lodash";

export const App: FC = () => {
  const [searchCity, setSearchCity] = useState("London");
  const [weatherData, setWeatherData] = useState<WeatherState>({ data: null })

  useEffect(() => {
    myDeb();
  }, [searchCity])

  const getWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=0f11ed7c3a60f593c7dc3911ce35d06a&q=${searchCity}&units=metric`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw new Error("error");
      })
      .then((data) => setWeatherData({...weatherData, data: data}));
  }
  const myDeb = debounce(getWeatherData, 2_000)

  return (
    <div className="App">
      <Input value={searchCity} onChange={(e) => setSearchCity(e)} placeholder={"city"} />
      <Card title={searchCity} data={weatherData?.data} />
    </div>
  );
}
