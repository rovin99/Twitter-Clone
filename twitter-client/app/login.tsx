import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-screen">
      {/* Left column */}
      <div className="md:col-span-4 bg-black">
        <div className="flex flex-col items-center justify-center h-full p-4 md:p-8">
          <div className="flex items-center justify-center">
            <FaXTwitter className="text-white text-4xl" />
            <h1 className="text-3xl font-bold text-white">Twitter Clone</h1>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <h2 className="text-2xl font-bold text-white">Happening now</h2>
            <h3 className="text-xl text-white">Join us today.</h3>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <button className="w-full md:w-64 h-12 text-white bg-blue-500 rounded-full">
              Sign up
            </button>
            <button className="w-full md:w-64 h-12 mt-2 text-blue-500 border-2 border-blue-500 rounded-full">
              Log in
            </button>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="md:col-span-8 bg-blue-500">
        <div className="flex flex-col items-center justify-center h-full p-4 md:p-8">
          <h1 className="text-4xl font-bold text-white">
            See what's happening in the world right now
          </h1>
          <h2 className="mt-4 text-2xl text-white">Join us today.</h2>
          <button className="w-full md:w-64 h-12 mt-4 text-blue-500 border-2 border-blue-500 rounded-full">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
