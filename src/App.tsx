import { FC, useState, useEffect, useCallback } from "react";
import { Input, Card } from "./components";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/weather/actionCreators";


export const App: FC = () => {
  const [searchCity, setSearchCity] = useState<string>('London');
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchWeather(searchCity) as any))
  return (
    <div className="App">
      <Input
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        placeholder={"city"} />
      <Card />
    </div>
  );
}


// https://api.openweathermap.org/data/2.5/weather?appid=0f11ed7c3a60f593c7dc3911ce35d06a&q=${city}&units=metric`