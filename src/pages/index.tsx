import Image from 'next/image'
import Link from 'next/link'
import { worldInfo } from '@/data/information'
import { useState } from 'react'

export default function Home() {
  const [info, setInfo] = useState(worldInfo)

  return (
    <main className={`flex min-h-screen flex-col items-center bg-gray-100 text-black`}>

      <header className="w-full h-50 p-3 bg-white flex shadow-md items-center justify-center mb-8">
        <h2 className="text-gray-800 font-bold text-2xl">MDIA-3109 Assessment 1</h2>
      </header>

      <div className="relative w-4/5 rounded-md shadow-md h-64 overflow-hidden">
        <Image src="/img/banner.jpg" alt="Banner" layout="fill" objectFit="cover" />
      </div>
      <div className="p-8 flex min-h-screen flex-col items-center w-4/5 mt-10 rounded-md shadow-md bg-white">

        <h1 className="text-4xl font-bold mb-8">World Info</h1>

        <div className="mb-10">
          <Link href="/about">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600 inline-block text-center font-bold">
              About Page
            </button>
          </Link>
          <Link href="https://www.kaggle.com/datasets/rafsunahmad/best-country-to-live-in-2024">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-block text-center font-bold">
              Data Source
            </button>
          </Link>
        </div>


        <div className="flex flex-wrap -mx-4">
          {info.map((country, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 px-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md shadow-md">
                <h3 className="text-lg font-bold mb-2">Country: {country.name}</h3>
                <h4 className="text-md mb-2">Located in: {country.region}</h4>
                <p className="text-sm">Population: {country.population.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      <footer className="w-full bg-white border-t border-gray-200 p-8 text-center mt-8">
            <p>MDIA-3109 Assessment 1</p>
        </footer>

    </main>
  )
}
