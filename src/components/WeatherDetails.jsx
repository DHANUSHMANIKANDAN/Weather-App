function WeatherDetails({ weather }) {

  const details = [
    {
      icon: "💧",
      title: "Humidity",
      value: `${weather.relative_humidity_2m}%`
    },
    {
      icon: "💨",
      title: "Wind Speed",
      value: `${weather.wind_speed_10m} km/h`
    },
    {
      icon: "🌡️",
      title: "Feels Like",
      value: `${Math.round(weather.apparent_temperature)}°C`
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4">

      {details.map((item, index) => (

        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between"
        >

          <span className="text-3xl">
            {item.icon}
          </span>

          <p className="text-gray-500">
            {item.title}
          </p>

          <h3 className="text-xl font-bold">
            {item.value}
          </h3>

        </div>

      ))}

    </div>
  );
}

export default WeatherDetails;