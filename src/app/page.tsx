"use client";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <div className="bg-[#f2f2ed] ">
    <div className="max-w-[1200px] mx-auto py-20 lg:pb-52 px-4">
      <div className="md:mx-4 flex gap-4">
      <p className="text-xs bg-[#dad4c8] p-2 rounded-full">Revenue Operations</p>
      <div className="flex-1 border-b-2 border-dashed border-gray-400"></div>
      </div>

      <div className="mt-4 md:flex md:justify-between md:items-center">
        <h1 className="flex-shrink max-w-[750px] text-5xl md:text-7xl font-bold py-6">Power your sales team with a clean, enriched CRM</h1>
        <div className="mt-4 md:mt-0 flex-shrink max-w-[350px] ">
          <p className="text-lg">Build an automated RevOps engine to cut all manual work from sales: build lead lists, custom scoring, and enrich CRM records in seconds.</p>
          <button
            className='font-semibold my-6 px-6 py-2 bg-black text-white rounded'>
              Talk to a GTM Engineer  -{'>'}</button>
        </div>
      </div>
    </div>
  </div>

  <div className='relative'>
    <Image
    src="/hero-back.webp"
    alt="Hero Background"
    width={900
    }
    height={600
    }
    unoptimized
    className='w-full h-auto object-contain'
    />

    <Image
    src="/hero-fore.webp"
    alt="Hero Foreground"
    width={2000
    }
    height={938
    }
    quality={100}
    unoptimized
    className='absolute bottom-0 h-auto w-[400px] xs:w-[500px] sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[2100px] left-1/2 -translate-x-1/2 object-contain'  
    />
  </div>

  </div>
  );
}
