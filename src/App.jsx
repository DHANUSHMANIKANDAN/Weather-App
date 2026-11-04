import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";

import { getCoordinates, getWeather } from "./services/weatherAPI";

function App() {

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(e, searchCity) {

    if (e) e.preventDefault();

    const cityName = (searchCity ?? city).trim();

    if (!cityName) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {

      // Step 1: Get coordinates
      const locationData = await getCoordinates(cityName);

      // Step 2: Get weather
      const weather = await getWeather(
        locationData.latitude,
        locationData.longitude
      );

      // Step 3: Update React states
      setLocation(locationData);
      setWeatherData(weather);
      setCity("");

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }
  }

  // Load default city when app opens
  useEffect(() => {
    handleSearch(null, "Coimbatore");
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-10">

      <div className="max-w-5xl mx-auto space-y-8">

        <header className="text-center">
          <h1 className="text-4xl font-bold text-slate-800">
            Weather App
          </h1>

          <p className="text-gray-500 mt-2">
            Check the weather around you
          </p>
        </header>

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
          loading={loading}
        />

        {loading && (
          <p className="text-center text-blue-600">
            Fetching weather information...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}

        {weatherData && location && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <CurrentWeather
                location={location}
                weather={weatherData.current}
              />

              <WeatherDetails
                weather={weatherData.current}
              />

            </div>

            <Forecast
              daily={weatherData.daily}
            />
          </>
        )}

        <footer className="text-center text-sm text-gray-400">
          Weather App | Built with React & Tailwind CSS
        </footer>

      </div>

    </div>
  );
}

export default App;