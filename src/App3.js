import React, { useState } from "react";
import UserResults from "./components/users/UserResults";

function App() {
  const api = {
    key: "544c34d7639c815b41dae1892237595e",
    city: "",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  console.log(weather);
  const clickFunction = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=544c34d7639c815b41dae1892237595e`
    )
      .then((res) => res.json())

      .then((results) => setWeather(results));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter city"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={clickFunction}>Get WEATHER</button>
      <div>
        {typeof weather.main !== "undefined" ? (
          <div>
            <h2>{weather.name}</h2>
            <h2>{weather.main.temp}</h2>
            <h2>{weather.weather[0].description}</h2>
          </div>
        ) : (
          <h2>nothing foundddd .....</h2>
        )}
      </div>
    </div>
  );
}

export default App;
