// import useSWR from 'swr'
import { useState } from 'react'

const Wakatime = () => {
  const [codingTime, setCodingTime] = useState({ codingTime: 10000000 })
  fetch('http://localhost:3000/api/wakatime')
    .then((res) => res.json())
    .then((data) => setCodingTime(data))

  return (
    <div className="backdrop-blur rounded-md  text-white w-full h-64 flex flex-col justify-center items-center">
      <h1 className="font-black text-3xl">Wakatime</h1>
      <p>
        {codingTime.codingTime !== 10000000
          ? `Total coding time: ${Math.floor(
              codingTime.codingTime / 60 / 60
            ).toLocaleString('en-US')} hours`
          : null}{' '}
      </p>
    </div>
  )
}

export default Wakatime
