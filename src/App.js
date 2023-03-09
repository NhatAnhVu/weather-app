import { useState } from "react";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [result, setResult] = useState({});

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=08aa986ea4e4b5fd2c0535dd822babbd`)
      const data = await res.json()
      setResult(data)
      setCityInput("")
    }
  };

  return (
    <div className="App">
      {result.cod == 200? (
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
              <img src={`./svgtopng/${result.weather[0].icon}.png`} alt="" className="display-info-image" />
              <div className="info">
                <span>Today</span>
                <h1>{result.name}</h1>
                <span>{`Temperature: ${result.main.temp}℃`}</span>
                <span>{result.weather[0].description}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="display">
            <img src= "./svgtopng/02d.png" alt="" className="display-image" />
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
