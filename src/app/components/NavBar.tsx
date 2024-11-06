"use client"
import { useState } from 'react'
import Image from 'next/image'
import { RiMenuFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import clay from '../../../public/clay.webp'

import CRM from '../../../public/CRM.avif'
import TAM from '../../../public/TAM.avif'
import inbound from '../../../public/inbound.avif'
import outbound from '../../../public/outbound.avif'
import intent from '../../../public/intent.avif'
import integrations from '../../../public/integrations.avif'
import multiProvider from '../../../public/multi-provider.avif'
import ai from '../../../public/ai.avif'
import copywriting from '../../../public/copywriting.avif'

import revops from '../../../public/revops.avif'
import sdr from '../../../public/sdr.avif'
import enterprise from '../../../public/enterprise.avif'
import solution1 from '../../../public/solution1.avif'
import solution2 from '../../../public/solution2.avif'

import university from '../../../public/university.avif'
import experts from '../../../public/experts.avif'
import claybooks from '../../../public/claybooks.avif'
import templates from '../../../public/templates.avif'
import blog from '../../../public/blog.avif'
import slack from '../../../public/slack.avif'
import getStarted from '../../../public/getStarted.avif'
import creators from '../../../public/creators.avif'
import live from '../../../public/live.avif'
import faq from '../../../public/faq.avif'
import youtube from '../../../public/youtube.avif'

import careers from '../../../public/careers.avif'
import stories from '../../../public/stories.avif'
import linkedin from '../../../public/linkedin.avif'

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div>
    <div className='px-6 py-4 flex items-center justify-between'>
        <Image 
        src={clay} 
        alt="Clay logo"
        className='h-[25px] w-auto cursor-pointer'
        />

        <div className='hidden lg:flex lg:items-center'>
            <ul className='flex gap-6 items-center'>
                <li className='font-semibold cursor-pointer flex items-center gap-2 group'>Product<IoIosArrowDown className='group-hover:rotate-180 focus:rotate-180 transition-all duration-200'/>
                    <div className='hidden group-hover:flex absolute top-[75px] right-1/2 translate-x-1/2 border-2 border-gray-200 rounded bg-white z-10'>
                        <div className='min-w-[300px]'>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>RECURRING WORKFLOWS</h2>
                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={CRM} 
                            alt="CRM logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>CRM enrichment & hygiene</h3>
                            <p className='text-xs text-gray-500'>Connect to and auto-update your CRM as a source of truth</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={TAM} 
                            alt="TAM logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>TAM sourcing</h3>
                            <p className='text-xs text-gray-500'>Build targeted lead lists using 10+ sources and AI</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={inbound} 
                            alt="Inbound logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Automated inbound</h3>
                            <p className='text-xs text-gray-500'>Connect to your webforms and auto-enrich and score leads</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={intent} 
                            alt="intent logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Automated outbound</h3>
                            <p className='text-xs text-gray-500'>Build, enrich, score, and message leads in seconds</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={outbound} 
                            alt="outbound logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Intent data</h3>
                            <p className='text-xs text-gray-500'>Track job changes, new hires, prootions, and more</p>
                            </div>
                            </div>
                        </div>

                        <div className='min-w-[300px]'>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>FEATURES</h2>
                            <div className='flex items-center border-b border-r border-gray-200 '>
                            <Image 
                            src={integrations} 
                            alt="Integrations logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium'>
                            <h3 className='text-sm pb-2'>Integrations</h3>
                            <p className='text-xs text-gray-500'>Access to 50+ databases to get the most comprehensive coverage of information</p>
                            </div>
                            </div>
                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={multiProvider} 
                            alt="Multi provider logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Multi-providedata enrichment</h3>
                            <p className='text-xs text-gray-500'>Search multiple providers sequentially to maximize data quality and coverage</p>
                            </div>
                            </div>
                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={ai} 
                            alt="ai logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>AI search agent</h3>
                            <p className='text-xs text-gray-500'>ask our agent to search websites and find all the answer to your questions</p>
                            </div>
                            </div>
                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={copywriting} 
                            alt="Copywriting logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Personalized copywriting</h3>
                            <p className='text-xs text-gray-500'>Use our AI email builder to write & send personalized emails that convert</p>
                            </div>
                            </div>
                        </div>

                        <div className='bg-gray-50 min-w-[200px]'>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>QUICK LINKS</h2>

                            <div className='[&>h3]:p-4 [&>h3]:border-b [&>h3]:border-gray-200 [&>h3]:font-medium text-sm'>
                                <h3>Templates</h3>
                                <h3>Chrome Extensions</h3>
                                <h3>Changelog</h3>
                                <h3>Security</h3>
                            </div>
                        </div>
                    </div>
                </li>

                <li className='font-semibold cursor-pointer flex items-center gap-2 group'>Solutions<IoIosArrowDown className='group-hover:rotate-180 focus:rotate-180 transition-all duration-200'/>
                    <div className='hidden group-hover:flex absolute top-[75px] right-1/2 translate-x-1/2 border-2 border-gray-200 rounded bg-white z-10'>
                        <div className='w-[300px]'>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>CLAY FOR</h2>
                            
                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={revops} 
                            alt="revops logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>RevOps</h3>
                            <p className='text-xs text-gray-500'>Prospect, enrich, and clean your CRM automatically</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={sdr} 
                            alt="sdr logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>SDRs</h3>
                            <p className='text-xs text-gray-500'>Grow pipeline faster by targeting and enriching your prospects in seconds</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={enterprise} 
                            alt="enterprise logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Enterprise</h3>
                            <p className='text-xs text-gray-500'>Build the data foundation for any GTM workflow</p>
                            </div>
                            </div>
                            
                        </div>

                        <div className='w-[576px] h-full flex flex-col'>
                            <h2 className='p-4 text-gray-500 bg-gray-50 text-xs border-b border-gray-200'>CUSTOMER SOLUTIONS</h2>
                            <div className='flex-1 flex h-full'>
                                <div className='p-4 flex flex-col items-center justify-between gap-2 w-1/2 border-r border-gray-200'>
                                    <h3 className='text-sm'>How Verkada’s growth team uses Clay to launch targeted ABM campaigns across LinkedIn, email, and direct mail</h3>
                                    <Image 
                                    src={solution1}
                                    alt='Solution 1'
                                    className='inline-block'                                    />
                                </div>

                                <div className='p-4 flex flex-col items-center justify-between gap-2 w-1/2'>
                                    <h3 className='text-sm'>How Anthropic uses Clay to 3x their enrichment coverage—with no manual work</h3>
                                    <Image 
                                    src={solution2}
                                    alt='Solution 2'
                                    className='inline-block'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className='font-semibold cursor-pointer flex items-center gap-2 group'>Resources<IoIosArrowDown className='group-hover:rotate-180 focus:rotate-180 transition-all duration-200'/>
                <div className='hidden group-hover:flex absolute top-[75px] right-1/2 translate-x-1/2 border-2 border-gray-200 rounded bg-white z-10'>
                    <div className='w-[600px] border-r border-gray-200'>
                        <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>RECURRING WORKFLOWS</h2>
                        
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={university} 
                            alt="university logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>University</h3>
                            <p className='text-xs text-gray-500'>Lern how to use Clay with our best resources</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={experts} 
                            alt="experts logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Experts</h3>
                            <p className='text-xs text-gray-500'>Need help scaling your outbound? Hire a Clay expert</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={claybooks} 
                            alt="claybooks logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Claybooks</h3>
                            <p className='text-xs text-gray-500'>Build powerful workflows with clay and other tools</p>
                            </div>
                            </div>
                            
                            <div className='flex items-center border-b border-r border-gray-200 '>
                            <Image 
                            src={templates} 
                            alt="templates logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium'>
                            <h3 className='text-sm pb-2'>Templates</h3>
                            <p className='text-xs text-gray-500'>Jumpstart your outbound campaigns with our top templates</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={blog} 
                            alt="blog logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Blog</h3>
                            <p className='text-xs text-gray-500'>Read our best guides for outbound, from email setup to AI copywriting</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={slack} 
                            alt="slack logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Slack Community</h3>
                            <p className='text-xs text-gray-500'>Join our Slack for live support and a community of 15K+ sales experts!</p>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='min-w-[250px] border-r border-gray-200'>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>ADDITIONAL HELP</h2>

                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={getStarted} 
                            alt="getStarted logo" 
                            className='p-4 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-4 border-l border-gray-200 '>Get started</h3>
                            </div>
                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={creators} 
                            alt="Creators logo" 
                            className='p-4 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-4 border-l border-gray-200 '>Creators</h3>
                            </div>
                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={live} 
                            alt="live logo" 
                            className='p-4 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-4 border-l border-gray-200 '>Live events</h3>
                            </div>
                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={integrations} 
                            alt="integrations logo" 
                            className='p-4 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-4 border-l border-gray-200 '>Integration patners</h3>
                            </div>
                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={faq} 
                            alt="faq logo" 
                            className='p-4 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-4 border-l border-gray-200 '>FAQ</h3>
                            </div>
                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={youtube} 
                            alt="youtube logo" 
                            className='p-4 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-4 border-l border-gray-200 '>YouTube</h3>
                            </div>
                    </div>

                    <div className='bg-gray-50 min-w-[200px]'>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>TOOLS</h2>

                            <div className='[&>h3]:p-4 [&>h3]:border-b [&>h3]:border-gray-200 [&>h3]:font-medium text-sm'>
                                <h3>Headcount finder</h3>
                                <h3>WHOIS lookup</h3>
                                <h3>job board</h3>
                                <h3>Headcount directory</h3>
                            </div>
                    </div>
                </div>

                </li>

                <li className='font-semibold cursor-pointer flex items-center gap-2 group'>Company<IoIosArrowDown className='group-hover:rotate-180 focus:rotate-180 transition-all duration-200'/>
                <div className='hidden group-hover:flex absolute top-[75px] right-1/2 translate-x-1/2 border-2 border-gray-200 rounded bg-white z-10'>
                        <div className='min-w-[300px]'>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>RECURRING WORKFLOWS</h2>
                            <div className='flex'>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={careers} 
                            alt="careers logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Careers</h3>
                            <p className='text-xs text-gray-500'>Learn about our team - and apply to join us</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={stories} 
                            alt="stories logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Customer Stories</h3>
                            <p className='text-xs text-gray-500'>Read about how our biggest customers use (& love) Clay</p>
                            </div>
                            </div>

                            </div>
                        </div>

                        <div className='min-w-[250px] border-l border-gray-200'>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>SOCIAL MEDIA</h2>

                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={linkedin} 
                            alt="linkedin logo" 
                            className='p-[0.75rem] border-r border-gray-200 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-[0.75rem]'>LinkedIn</h3>
                            </div>
                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={youtube} 
                            alt="youtube logo" 
                            className='p-[0.75rem] border-r border-gray-200 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-[0.75rem]'>YouTube</h3>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='font-semibold cursor-pointer group'>Enterprise <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-black"></div></li>
                <li className='font-semibold cursor-pointer group'>Pricing <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-black"></div></li>
            </ul>
        </div>

        <div className='flex gap-4 items-center'>
            <button className='hidden md:block font-semibold mr-4'>Login</button>

            <div className='lg:hidden'>
            {isMenuOpen ? 
            <MdClose 
            className='w-6 h-6 cursor-pointer' 
            onClick={() => setMenuOpen(!isMenuOpen)}/> : 
            <RiMenuFill 
            className='w-6 h-6 cursor-pointer' 
            onClick={() => setMenuOpen(!isMenuOpen)}/>}
            </div>  
            <button
            className='font-semibold px-6 py-2 bg-black text-white rounded'>Sign Up  -{'>'}</button>
        </div>
    </div>
    {isMenuOpen && (
            <div className="absolute top-[75px] border-b border-gray-200 shadow-md w-full bg-white z-10">
            <ul className="flex flex-col items-start justify-center w-full [&>li]:px-6">
              <li
                className="w-full border-b border-gray-200 py-2 font-semibold cursor-pointer flex items-center gap-2 group"
                onClick={() => toggleDropdown(1)}
              >
                Product
                <IoIosArrowDown
                  className={`transition-all duration-200 ${
                    activeDropdown === 1 ? 'rotate-180' : ''
                  }`}
                />
                </li>

                {activeDropdown === 1 && (
                <div className='w-full group-hover:flex border-2 border-gray-200 rounded bg-white z-10'>
                        <div>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>RECURRING WORKFLOWS</h2>
                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={CRM} 
                            alt="CRM logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>CRM enrichment & hygiene</h3>
                            <p className='text-xs text-gray-500'>Connect to and auto-update your CRM as a source of truth</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={TAM} 
                            alt="TAM logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>TAM sourcing</h3>
                            <p className='text-xs text-gray-500'>Build targeted lead lists using 10+ sources and AI</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={inbound} 
                            alt="Inbound logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Automated inbound</h3>
                            <p className='text-xs text-gray-500'>Connect to your webforms and auto-enrich and score leads</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={intent} 
                            alt="intent logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Automated outbound</h3>
                            <p className='text-xs text-gray-500'>Build, enrich, score, and message leads in seconds</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={outbound} 
                            alt="outbound logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Intent data</h3>
                            <p className='text-xs text-gray-500'>Track job changes, new hires, prootions, and more</p>
                            </div>
                            </div>
                        </div>

                        <div>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>FEATURES</h2>
                            <div className='flex items-center border-b border-r border-gray-200 '>
                            <Image 
                            src={integrations} 
                            alt="Integrations logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium'>
                            <h3 className='text-sm pb-2'>Integrations</h3>
                            <p className='text-xs text-gray-500'>Access to 50+ databases to get the most comprehensive coverage of information</p>
                            </div>
                            </div>
                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={multiProvider} 
                            alt="Multi provider logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Multi-providedata enrichment</h3>
                            <p className='text-xs text-gray-500'>Search multiple providers sequentially to maximize data quality and coverage</p>
                            </div>
                            </div>
                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={ai} 
                            alt="ai logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>AI search agent</h3>
                            <p className='text-xs text-gray-500'>ask our agent to search websites and find all the answer to your questions</p>
                            </div>
                            </div>
                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={copywriting} 
                            alt="Copywriting logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Personalized copywriting</h3>
                            <p className='text-xs text-gray-500'>Use our AI email builder to write & send personalized emails that convert</p>
                            </div>
                            </div>
                        </div>

                        <div className='bg-gray-50'>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>QUICK LINKS</h2>

                            <div className='[&>h3]:p-4 [&>h3]:border-b [&>h3]:border-gray-200 [&>h3]:font-medium text-sm'>
                                <h3>Templates</h3>
                                <h3>Chrome Extensions</h3>
                                <h3>Changelog</h3>
                                <h3>Security</h3>
                            </div>
                        </div>
                </div>)}

                <li 
                    className='w-full border-b border-gray-200 py-2 font-semibold cursor-pointer flex items-center gap-2 group'
                    onClick={() => toggleDropdown(2)}
                >
                    Solutions
                    <IoIosArrowDown 
                    className='group-hover:rotate-180 focus:rotate-180 transition-all duration-200'/>
                    
                </li>
                {activeDropdown === 2 && (
                    <div className='w-full group-hover:flex border-2 border-gray-200 rounded bg-white z-10'>
                        <div>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>CLAY FOR</h2>
                            
                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={revops} 
                            alt="revops logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>RevOps</h3>
                            <p className='text-xs text-gray-500'>Prospect, enrich, and clean your CRM automatically</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={sdr} 
                            alt="sdr logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>SDRs</h3>
                            <p className='text-xs text-gray-500'>Grow pipeline faster by targeting and enriching your prospects in seconds</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={enterprise} 
                            alt="enterprise logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Enterprise</h3>
                            <p className='text-xs text-gray-500'>Build the data foundation for any GTM workflow</p>
                            </div>
                            </div>
                            
                        </div>

                        <div className='flex flex-col'>
                            <h2 className='p-4 text-gray-500 bg-gray-50 text-xs border-b border-gray-200'>CUSTOMER SOLUTIONS</h2>
                            <div className='flex-1 flex h-full'>
                                <div className='p-4 flex flex-col items-center justify-between gap-2 w-1/2 border-r border-gray-200'>
                                    <h3 className='text-sm'>How Verkada’s growth team uses Clay to launch targeted ABM campaigns across LinkedIn, email, and direct mail</h3>
                                    <Image 
                                    src={solution1}
                                    alt='Solution 1'
                                    className='inline-block'                                    />
                                </div>

                                <div className='p-4 flex flex-col items-center justify-between gap-2 w-1/2'>
                                    <h3 className='text-sm'>How Anthropic uses Clay to 3x their enrichment coverage—with no manual work</h3>
                                    <Image 
                                    src={solution2}
                                    alt='Solution 2'
                                    className='inline-block'
                                    />
                                </div>
                            </div>
                        </div>
                </div>
                )}

                <li 
                className='w-full border-b border-gray-200 py-2 font-semibold cursor-pointer flex items-center gap-2 group'
                onClick={() => toggleDropdown(3)}
                >
                    Resources
                    <IoIosArrowDown
                  className={`transition-all duration-200 ${
                    activeDropdown === 3 ? 'rotate-180' : ''
                  }`}
                />
                </li>
                {activeDropdown === 3 && (
                    <div className='w-full group-hover:flex border-2 border-gray-200 rounded bg-white z-10'>
                    <div className='border-r border-gray-200'>
                        <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>RECURRING WORKFLOWS</h2>
                        
                        <div>
                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={university} 
                            alt="university logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>University</h3>
                            <p className='text-xs text-gray-500'>Lern how to use Clay with our best resources</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={experts} 
                            alt="experts logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Experts</h3>
                            <p className='text-xs text-gray-500'>Need help scaling your outbound? Hire a Clay expert</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={claybooks} 
                            alt="claybooks logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Claybooks</h3>
                            <p className='text-xs text-gray-500'>Build powerful workflows with clay and other tools</p>
                            </div>
                            </div>
                            
                            <div className='flex items-center border-b border-r border-gray-200 '>
                            <Image 
                            src={templates} 
                            alt="templates logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium'>
                            <h3 className='text-sm pb-2'>Templates</h3>
                            <p className='text-xs text-gray-500'>Jumpstart your outbound campaigns with our top templates</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={blog} 
                            alt="blog logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Blog</h3>
                            <p className='text-xs text-gray-500'>Read our best guides for outbound, from email setup to AI copywriting</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={slack} 
                            alt="slack logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Slack Community</h3>
                            <p className='text-xs text-gray-500'>Join our Slack for live support and a community of 15K+ sales experts!</p>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='min-w-[250px] border-r border-gray-200'>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>ADDITIONAL HELP</h2>

                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={getStarted} 
                            alt="getStarted logo" 
                            className='p-4 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-4 border-l border-gray-200 '>Get started</h3>
                            </div>
                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={creators} 
                            alt="Creators logo" 
                            className='p-4 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-4 border-l border-gray-200 '>Creators</h3>
                            </div>
                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={live} 
                            alt="live logo" 
                            className='p-4 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-4 border-l border-gray-200 '>Live events</h3>
                            </div>
                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={integrations} 
                            alt="integrations logo" 
                            className='p-4 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-4 border-l border-gray-200 '>Integration patners</h3>
                            </div>
                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={faq} 
                            alt="faq logo" 
                            className='p-4 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-4 border-l border-gray-200 '>FAQ</h3>
                            </div>
                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={youtube} 
                            alt="youtube logo" 
                            className='p-4 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-4 border-l border-gray-200 '>YouTube</h3>
                            </div>
                    </div>

                    <div className='bg-gray-50 min-w-[200px]'>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>TOOLS</h2>

                            <div className='[&>h3]:p-4 [&>h3]:border-b [&>h3]:border-gray-200 [&>h3]:font-medium text-sm'>
                                <h3>Headcount finder</h3>
                                <h3>WHOIS lookup</h3>
                                <h3>job board</h3>
                                <h3>Headcount directory</h3>
                            </div>
                    </div>
                </div>
                )}

                <li 
                    className='w-full border-b border-gray-200 py-2 font-semibold cursor-pointer flex items-center gap-2 group'
                    onClick={() => toggleDropdown(4)}
                >
                Company
                <IoIosArrowDown 
                className='group-hover:rotate-180 focus:rotate-180 transition-all duration-200'/>
                
            </li>
            {activeDropdown === 4 && (
                <div className='w-full group-hover:flex border-2 border-gray-200 rounded bg-white z-10'>
                        <div>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>RECURRING WORKFLOWS</h2>
                            <div className='flex flex-col'>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={careers} 
                            alt="careers logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Careers</h3>
                            <p className='text-xs text-gray-500'>Learn about our team - and apply to join us</p>
                            </div>
                            </div>

                            <div className='flex items-center border-b border-r border-gray-200'>
                            <Image 
                            src={stories} 
                            alt="stories logo" 
                            className='m-6 max-w-[25px] max-h-[25px]'
                            />

                            <div className='p-4 border-l border-gray-200 font-medium '>
                            <h3 className='text-sm pb-2'>Customer Stories</h3>
                            <p className='text-xs text-gray-500'>Read about how our biggest customers use (& love) Clay</p>
                            </div>
                            </div>

                            </div>
                        </div>

                        <div className='border-l border-gray-200'>
                            <h2 className='p-4 border-b border-r border-gray-200 text-gray-500 bg-gray-50 text-xs'>SOCIAL MEDIA</h2>

                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={linkedin} 
                            alt="linkedin logo" 
                            className='p-[0.75rem] border-r border-gray-200 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-[0.75rem]'>LinkedIn</h3>
                            </div>
                            <div className='flex items-center text-sm border-b border-gray-200 '>
                            <Image 
                            src={youtube} 
                            alt="youtube logo" 
                            className='p-[0.75rem] border-r border-gray-200 max-w-[50px] max-h-[50px]'
                            />
                                <h3 className='p-[0.75rem]'>YouTube</h3>
                            </div>
                        </div>
                </div>
            )}
                
                <li className="w-full border-b border-gray-200 py-2 font-semibold cursor-pointer group">
                    <span className="inline-flex flex-col items-center">
                        Enterprise
                        <div className="max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-black w-full"></div>
                    </span>
                </li>
                
                <li className="w-full border-b border-gray-200 py-2 font-semibold cursor-pointer group">
                    <span className="inline-flex flex-col items-center">
                        Pricing
                        <div className="max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-black w-full"></div>
                    </span>
                </li>

                <button
            className='font-semibold m-6 px-6 py-2 bg-black text-white rounded'>Start building - for free</button>
            </ul>
            </div>
        )}
    </div>
  )
}

export default NavBar