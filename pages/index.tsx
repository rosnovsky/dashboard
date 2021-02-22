import Head from 'next/head'
import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'
import Weather from '../components/Dashboard/Weather'
import Wakatime from '../components/Dashboard/Wakatime'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundImage />
      <div className="h-screen flex flex-col justify-between">
        <Header />
        <div className="container">
          <main className="grid xl:grid-cols-4 gap-10 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
            <Weather />
            <div className="backdrop-blur rounded-md  text-white w-full  h-64 flex flex-col justify-center items-center">
              <h1 className="font-black text-3xl">Tasks</h1>
            </div>
            <div className="backdrop-blur rounded-md  text-white w-full  h-64 flex flex-col justify-center items-center">
              <h1 className="font-black text-3xl">Calendar</h1>
            </div>
            <Wakatime />
            <div className="backdrop-blur rounded-md  text-white w-full  h-64 flex flex-col justify-center items-center">
              <h1 className="font-black text-3xl">RescueTime</h1>
            </div>
            <div className="backdrop-blur  rounded-md text-white w-full  h-64 flex flex-col justify-center items-center">
              <h1 className="font-black text-3xl">YNAB</h1>
            </div>
            <div className="backdrop-blur rounded-md  text-white w-full  h-64 flex flex-col justify-center items-center">
              <h1 className="font-black text-3xl">Music</h1>
            </div>
            <div className="backdrop-blur rounded-md text-white w-full  h-64 flex flex-col justify-center items-center">
              <h1 className="font-black text-3xl">Arlo</h1>
            </div>
          </main>
        </div>
        <footer className="w-full mt-10 text-white text-center backdrop-blur h-20 flex flex-col justify-center">
          © Rosnovsky Park
        </footer>
      </div>
    </>
  )
}
