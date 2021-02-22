import { useState, useEffect } from 'react'
import useSWR from 'swr'

const Header = () => {
  const [date, setDate] = useState(new Date())

  const fetcher = (url: string, ...args: any[]) =>
    fetch(url, ...args)
      .then((res) => res.json())
      .then((res) => {
        setDate(new Date(res.datetime))
        return res
      })

  const { data, error } = useSWR('/api/time', fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: true,
    refreshWhenHidden: true,
    revalidateOnReconnect: true,
    revalidateOnMount: true,
  })
  if (error) {
    console.error('❌ failed to load precise time')
    return (
      <div className="w-screen backdrop-blur text-white font-mono text-3xl text-center mb-10 h-20 flex flex-col justify-center">
        {date.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
          timeZoneName: 'short',
        })}
      </div>
    )
  }
  if (!data) {
    console.warn('⏳ Loading precise time')
    return (
      <div className="w-screen backdrop-blur text-white font-mono text-3xl text-center mb-10 h-20 flex flex-col justify-center">
        {date.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
          timeZoneName: 'short',
        })}
      </div>
    )
  }

  if (data) {
    console.info(`✅ got time: ${data.datetime}`)
  }

  return (
    <div className="w-screen backdrop-blur text-white font-mono text-3xl text-center mb-10 h-20 flex flex-col justify-center">
      {date.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        weekday: 'long',
        timeZoneName: 'short',
      })}
    </div>
  )
}

export default Header
