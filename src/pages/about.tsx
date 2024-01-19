import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className={`flex min-h-screen flex-col items-center bg-gray-100 text-black`}>

        <header className="w-full h-50 p-3 bg-white flex shadow-md items-center justify-center mb-8">
            <h2 className="text-gray-800 font-bold text-2xl">MDIA-3109 Assessment 1</h2>
        </header>

        <div className="relative w-4/5 rounded-md shadow-md h-64 overflow-hidden">
            <Image src="/img/banner.jpg" alt="Banner" layout="fill" objectFit="cover" />
        </div>

        <div className="p-8 flex min-h-screen flex-col items-center w-4/5 mt-10 rounded-md shadow-md bg-white">
            <h1 className="text-4xl font-bold mb-8">About</h1>
            <p className="text-lg mb-4">
            This website was made by Aaron Tripp for Advanced Dynamic Content Design (MDIA-3109) at BCIT. <br />
            The purpose of this assessment is to practice using NextJS, Tailwind, TypeScript, and Cypress.
            </p>
            <Link href="/" className="text-blue-500 hover:underline">Back Home</Link>
        </div>

        <footer className="w-full bg-white border-t border-gray-200 p-8 text-center mt-8">
            <p>MDIA-3109 Assessment 1</p>
        </footer>

    </main>
  );
}