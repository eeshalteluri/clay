"use client"
import React, { useState } from "react"
import Image from "next/image"

import { Testimonials } from "../data/Testimonials"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/app/components/ui/carousel"

import { RiDoubleQuotesR } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export function CarouselSize() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="max-w-[1200px] mx-auto mx-auto flex flex-col justify-center items-center pt-20 pb-6 px-4">
      <div className="w-full mb-4 flex flex-col md:flex-row justify-between md:items-end">
        <h2 className="text-5xl font-bold">What our customers <span className="inline md:block">say about us...</span></h2>

        <div className="h-fit flex gap-2 mt-4 md:mt-0 ">
          <button 
            onClick={() => api?.scrollPrev()}
            className="p-2 border rounded"
          >
            <IoIosArrowBack className="w-[30px] h-[30px]"/>
          </button>
          
          <button 
            onClick={() => api?.scrollNext()}
            className="p-2 border rounded"
            >
              <IoIosArrowForward className="w-[30px] h-[30px]"/>
          </button>
        </div>
      </div>

    <Carousel 
      setApi={setApi}
      className="w-full"
      >
      <CarouselContent >
        {Testimonials.map((testimonial) => (
          <CarouselItem 
            key={testimonial.id} 
            className="w-full md:max-w-[600px] h-auto basis-1/1 md:basis-1/2 ">
          <div
            className="flex flex-col gap-4 w-full h-[350px] border-8 p-4 rounded hover:shadow-2xl"
            style={{ borderColor: testimonial.color }}
          >
          <RiDoubleQuotesR className="text-4xl text-black"/>
           <p className="flex-1">{testimonial.text}</p>
           <div >
             <hr className="border-black"/>
             <div className="my-4 flex justify-between items-center">
               <div className="flex items-end gap-2">
                 <Image 
                   src={testimonial.image} 
                   alt="Clay logo" 
                   width={75} 
                   height={75}
                   className="rounded border-2 border-black"
                 />
                 <div>
                 <h4>{testimonial.name}</h4>
                 <p>{testimonial.title}</p>
                 </div>
               </div>
               <Image
                 src={testimonial.company}
                 alt="Clay logo"
                 width={50}
                 height={50}
               />
             </div>  
           </div>
          </div>
         </CarouselItem>
        ))
        }
      </CarouselContent>
    </Carousel>
    </div>
  )
}

export default CarouselSize
