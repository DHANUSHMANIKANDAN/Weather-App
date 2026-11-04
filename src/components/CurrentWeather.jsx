import { getWeatherInfo } from "../services/weatherUtils";

function CurrentWeather({ location, weather }) {

  const weatherInfo = getWeatherInfo(weather.weather_code);

  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 to-pink-400 text-white rounded-3xl p-8 text-center shadow-xl">

      <h2 className="text-2xl font-semibold">
        {location.name}, {location.country_code}
      </h2>

      <p className="text-blue-100 mt-2">
        {new Date(weather.time).toLocaleDateString("en-IN", {
          weekday: "long",
          day: "numeric",
          month: "long"
        })}
      </p>

      <div className="flex justify-center items-center gap-5 my-6">

        <span className="text-7xl">
          {weatherInfo.icon}
        </span>

        <h1 className="text-7xl font-bold">
          {Math.round(weather.temperature_2m)}°
        </h1>

      </div>

      <h3 className="text-2xl font-medium">
        {weatherInfo.description}
      </h3>

      <p className="text-blue-100 mt-2">
        Feels like {Math.round(weather.apparent_temperature)}°C
      </p>

    </div>
  );
}

export default CurrentWeather;