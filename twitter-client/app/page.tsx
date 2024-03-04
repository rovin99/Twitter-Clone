import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';

export default function Home() {
  return (
    <div>

      <div className="grid grid-cols-12 h-screen w-screen">
        <div className="col-span-3 flex justify-center pt-10">
          <FaXTwitter className="text-white text-3xl"/>

          {/* twitter left panel */}

          
          
        </div>
        <div className='col-span-6 border-r-[0.1px] border-l-[0.1px] border-gray-400'></div>
        <div className='col-span-3'></div>
      </div>
    </div>
  );
}
