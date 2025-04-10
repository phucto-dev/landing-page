import React from 'react';
import Technology from '@/assets/img/Technology.webp';
import { Button } from '../ui/button';
import HomePlat from '../sgv/homePlat';
import Architecture from '../sgv/Architecture';
import Api from '../sgv/Api';
import Cloud from '../sgv/Cloud';
import Solution from '../sgv/Solution';
import { MoveUpRight } from 'lucide-react';

type Props = {}

const Platform = (props: Props) => {
  return (
    <div className='w-[73%] h-[88vh] mb-7 rounded-2xl bg-cover bg-center flex justify-center items-center relative' style={{ backgroundImage: `url(${Technology.src})` }}>
      <div className="w-[90%] h-[70%] flex-col justify-center items-start">
        <h1 className='text-center pb-12 text-3xl text-white font-semibold'>
          Robust Technology Platform Designed to Deliver Excellence
        </h1>
        <div className='grid grid-cols-3 grid-rows-2 gap-6 pt-3'>
          <div className="flex">
            <div className='pr-3 '>
              <Architecture />
            </div>
            <div className="content">
              <h1 className='text-2xl font-semibold pb-1'>
                Composable Architecture
              </h1>
              <p className='text-sm text-[#919bd8] font-semibold'>
                Highly composable to enable growth for banks & financial institutions by sensing and responding to changes in business conditions, and reassembling business elements to rapidly seize market opportunities.
              </p>
            </div>
          </div>
          <div className="row-span-2 " style={{ transform: 'scale(1.03, 1.1)' }}><HomePlat /></div>
          <div className="flex">
            <div className='pr-3 '>
              <Cloud />
            </div>
            <div className="content">
              <h1 className='text-2xl font-semibold pb-1'>
                Tailored Deployment
              </h1>
              <p className='text-sm text-[#919bd8] font-semibold'>
                Inherent resiliency, fully scalable & secure architecture across cloud and on-premise supported by best-in-class strategic technology partnerships.              </p>
            </div>
          </div>
          <div className="flex">
            <div className='pr-3 '>
              <Api />
            </div>
            <div className="content">
              <h1 className='text-2xl font-semibold pb-1'>
                540+ Out-of-box APIs
              </h1>
              <p className='text-sm text-[#919bd8] font-semibold'>
                Leading edge technology stack with a service oriented architecture driven by an API Center comprising 540+ APIs.              </p>
            </div>
          </div>
          <div className="flex">
            <div className='pr-3 '>
              <Solution />
            </div>
            <div className="content">
              <h1 className='text-2xl font-semibold pb-1'>

                Intelligent Structure
              </h1>
              <p className='text-sm text-[#919bd8] font-semibold'>
                AI Powered smart platform designed to help build intelligent solutions to boost productivity, improve user experience, enhance security and take informed, intelligent decisions.              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center pt-12'>
          <Button className="rounded-full w-80 py-6 mt-4 h-10  bg-transparent border border-white text-white text-base hover:cursor-pointer hover:bg-white hover:text-blue-500">
            Know More about Out Technologies
            <MoveUpRight className='scale-130'/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Platform;