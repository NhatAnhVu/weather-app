import { useState } from "react";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [result, setResult] = useState({});

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=08aa986ea4e4b5fd2c0535dd822babbd`
      );
      const data = await res.json();
      setResult(data);
      setCityInput("");
    }
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const getDayName = (paramN) => {
    if (today.getDay() + paramN > 6) {
      return days[(today.getDay() + paramN) % 6];
    }
    return days[today.getDay() + paramN];
  };

  return (
    <div className="App">
      {result.cod == 200 ? (
        <div className="result">
          <input
            type="text"
            placeholder="Enter a City"
            className="input"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            onKeyDown={handleEnter}
          />
          <div className="container result-container">
            <div className="display">
              <img
                src={`./svgtopng/${result.list[1].weather[0].icon}.png`}
                alt=""
                className="display-info-image"
              />
              <div className="info">
                <span>Today</span>
                <h1>{result.city.name}</h1>
                <span>{`Temperature: ${result.list[1].main.temp}°F`}</span>
                <span>{result.list[1].weather[0].description}</span>
              </div>
            </div>
            <div className="forecast">
              <div className="forecast-day">
                <strong>{getDayName(1)}</strong>
                <img
                  src={`./svgtopng/${result.list[9].weather[0].icon}.png`}
                  alt=""
                />
                <span>{`${result.list[8].main.temp}°F`}</span>
              </div>
              <div className="forecast-day">
                <strong>{getDayName(2)}</strong>
                <img
                  src={`./svgtopng/${result.list[17].weather[0].icon}.png`}
                  alt=""
                />
                <span>{`${result.list[17].main.temp}°F`}</span>
              </div>
              <div className="forecast-day">
                <strong>{getDayName(3)}</strong>
                <img
                  src={`./svgtopng/${result.list[25].weather[0].icon}.png`}
                  alt=""
                />
                <span>{`${result.list[25].main.temp}°F`}</span>
              </div>
              <div className="forecast-day">
                <strong>{getDayName(4)}</strong>
                <img
                  src={`./svgtopng/${result.list[33].weather[0].icon}.png`}
                  alt=""
                />
                <span>{`${result.list[33].main.temp}°F`}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="display">
            <img src="./svgtopng/02d.png" alt="" className="display-image" />
            <h1>Weather Forecast</h1>
          </div>
          <input
            type="text"
            placeholder="Enter a City"
            className="input"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            onKeyDown={handleEnter}
          />
        </div>
      )}
    </div>
  );
}

export default App;
