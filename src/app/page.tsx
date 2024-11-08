"use client";
import Image from 'next/image'
import BenefitCard from './components/BenefitCard';
import FeatureCard from './components/FeatureCard';

import Testimonial from './components/Testimonial';

export default function Home() {
  /**  */
  return (
    <div>
      <div className="bg-[#f2f2ed] ">
      <div className="max-w-[1200px] mx-auto py-20 lg:pb-52 px-4">
        <div className="md:mx-4 flex gap-4">
        <p className="text-xs bg-[#dad4c8] p-2 rounded-full">Revenue Operations</p>
        <div className="hidden xs:block flex-1 border-b-2 border-dashed border-gray-400"></div>
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
      className='w-full max-h-[350px] object-cover'
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
      className='absolute bottom-0 h-auto w-[150px] xxs:w-[320px] xs:w-[500px] sm:w-[600px] md:w-[700px] 2md:w-[800px] lg:w-[900px] xl:w-[1200px] left-1/2 -translate-x-1/2 object-contain'  
      />
      </div>

      <div className='max-w-[1200px] mx-auto pt-20 px-4 grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row gap-8'>
      <BenefitCard 
      title={'Improve enrichment coverage with waterfalls'}
      description={'Access your existing subscriptions and 80+ other databases just with Clay. Search multiple providers to maximize coverage: we often 2-3x coverage vs. using single providers.'}
      />
      <BenefitCard 
      title={'Replace all manual sales research'}
      description={'Use our AI web research agent to replace manual sales workflows, whether checking if a company is B2B, looking for specific industry markers, or finding certifications.'}
      />
      <BenefitCard 
      title={'Implement custom scoring with AI'}
      description={'Firmographics arenot enough for deep ICP targeting. Create custom filters and lead scores based on the variables that matter most to your business.'}
      />
      <BenefitCard 
      title={'Keep your CRM your final source of truth'}
      description={'Sync all work seamlessly between Clay and your CRM. Bulk enrich and update records, auto-enrich inbound leads live, help SDRs enrich accounts on demand in Salesforce, and more.'}
      />
      </div>

      <div className='max-w-[1200px] flex flex-col mx-auto pt-20 px-4'>
      <FeatureCard 
      image = "/section1.avif"
      alt = "Section 1"
      title='Build custom lead scores to save sellers time'
      description='Forget relying on just industry size or headcount. Create lead scoring filters that are unique to your business needs based on any data you can find on the internet.'
      buttonText='Start list building'
      reversed={false}
      />
      <FeatureCard 
      image = "/section2.avif"
      alt = "Section 2"
      title='Auto-enrich and update records in your sleep'
      description='Bulk enrich any set of records in your CRM to check for updates or changes in the fields you care about. Enrich and qualify inbound leads as they come in to increase your speed to lead.
  '
      buttonText='Explore automated enrichments'
      reversed={true}
      />

      <FeatureCard
      image='/section3.avif'
      alt = "Section 3"
      title='Build custom lead scores to save sellers time'
      description='Forget relying on just industry size or headcount. Create lead scoring filters that are unique to your business needs based on any data you can find on the internet.'
      buttonText='Explore scoring in Clay'
      reversed={false}
      />

      <FeatureCard
      image='/section4.avif'
      alt = "Section 4"
      title='Sync data to any database, sequencer, or CRM'
      description='Once you’ve enriched your records in Clay, automatically sync them to live email sequences or your CRM to keep your data clean.'
      buttonText='Get started today'
      reversed={true}
      />
      </div>

      <Testimonial />
      </div>
  )
}
