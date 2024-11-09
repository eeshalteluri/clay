"use client"
import React, { useState } from "react"
import Image from "next/image"

import { Blogs } from "../data/Blogs"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/app/components/ui/carousel"

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

    console.log(current)
  }, [api])

  return (
    <div className="max-w-[1200px] mx-auto mx-auto flex flex-col justify-center items-center pt-20 pb-6 px-4 mb-12">
      <div className="w-full mb-4 flex flex-col md:flex-row justify-between md:items-end">
        <div className="flex flex-col">
        <h2 className="text-5xl font-bold">Learn with our resources</h2>
        <p>Check out Clay University, read our GTM blog, or try out our top templates to transform your growth ideas into outreach in minutes.</p>
        </div>

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
        {Blogs.map((blog) => (
          <CarouselItem 
            key={blog.id} 
            className="w-full md:max-w-[300px] h-auto basis-1/1 md:basis-1/2 ">
          <div
            className="flex flex-col gap-4 w-full h-auto border-8 p-4 rounded-md hover:shadow-2xl">
            <Image
              src={blog.image}
              alt={blog.title}
              width={788}
              height={630}
              className="w-full h-auto object-cover rounded-md"
            />

            <h3 className="text-xl font-bold">{blog.title}</h3>

            <button className="text-start">Read blog post -{'>'}</button>
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
