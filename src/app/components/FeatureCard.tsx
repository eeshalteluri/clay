"use client"
import Image from 'next/image'

interface FeatureCardProps {
    image: string
    alt: string
    title: string
    description: string
    reversed: boolean
    buttonText: string
}

const FeatureCard = ({image, alt,title, description, reversed, buttonText}: FeatureCardProps) => {
  return (
    <div className={`w-full flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-around items-center gap-4 my-4 lg:my-0`}>
        <Image 
        src={image}
        alt={alt}
        width={1280}
        height={1280}
        className='lg:w-1/2 w-auto h-full object-cover'
        />

        <div className='lg:w-1/2 flex flex-col justify-center mt-4 md:mt-0 md:py-8'>
            <h3 className="text-6xl font-semibold">{title}</h3>
            <p className="text-md my-4">{description}</p>

            <button
            className='text-start'
            >{buttonText}</button>
        </div>
    </div>
  )
}

export default FeatureCard