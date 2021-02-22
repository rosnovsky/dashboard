import useSWR from 'swr'
import { useState } from 'react'

const Weather = () => {
  const [weather, setWeather] = useState({
    current: { weather: [{ description: 'Cloudy' }], temp: 50 },
  })

  const capitalize = function (string: string) {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const fetcher = (url: string, ...args: any[]) =>
    fetch(url, ...args)
      .then((res) => res.json())
      .then((res) => {
        setWeather(res)
        return res
      })

  const { data, error } = useSWR(
    // Switch to serverless function to protect API key
    `https://api.openweathermap.org/data/2.5/onecall?lat=47.861852&lon=-122.177050&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
    fetcher,
    { refreshInterval: 10800, revalidateOnReconnect: true }
  )

  console.log(weather)
  return (
    <div className="backdrop-blur rounded-md w-full h-64 flex flex-col text-white justify-center items-center">
      <h1 className="text-white font-black text-3xl">Weather</h1>
      <p>
        {data
          ? `${Math.floor(((weather.current.temp - 273.15) * 9) / 5 + 32)}˚F`
          : '50˚F'}
      </p>
      <p>
        {data ? capitalize(weather.current.weather[0].description) : "It's ok"}
      </p>
    </div>
  )
}

export default Weather
