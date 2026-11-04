import { getWeatherInfo } from "../services/weatherUtils";

function Forecast({ daily }) {

  return (
    <div>

      <h2 className="text-2xl font-bold mb-5">
        5-Day Forecast
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">

        {daily.time.map((date, index) => {

          const weatherInfo = getWeatherInfo(
            daily.weather_code[index]
          );

          const day = new Date(
            `${date}T12:00:00`
          ).toLocaleDateString("en-US", {
            weekday: "short"
          });

          return (

            <div
              key={date}
              className="bg-white p-4 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition"
            >

              <h3 className="font-semibold text-gray-700">
                {day}
              </h3>

              <span className="text-3xl block my-4">
                {weatherInfo.icon}
              </span>

              <p className="font-bold text-lg">
                {Math.round(daily.temperature_2m_max[index])}°
              </p>

              <p className="text-sm text-gray-500">
                {Math.round(daily.temperature_2m_min[index])}°
              </p>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default Forecast;