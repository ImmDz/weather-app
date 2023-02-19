import { FC, useState, useEffect, useCallback } from "react";
import { Input, Card } from "./components";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/weather/slice";

export const App: FC = () => {
  const [searchCity, setSearchCity] = useState<string>('London');
  const dispatch = useDispatch();

  const fetchWeatherDeb = useCallback(
    debounce((param) => dispatch(actions.getWeather(param) as any), 1_500),
    [dispatch]
  );

  useEffect(() => {
    fetchWeatherDeb(searchCity);

  }, [searchCity])
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