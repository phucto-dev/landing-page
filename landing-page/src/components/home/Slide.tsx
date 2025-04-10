import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
type Props = {}

const Slide = (props: Props) => {
    const items = [
        {
            title: '2700',
            info: 'Lending product variants in use by customers'
        },
        {
            title: '1B+',
            info: 'Transactions processed per year'
        },
        {
            title: '100+',
            info: 'Customers operate our customer acquisition system'
        },
        {
            title: '94+',
            info: 'Customers operate our loan collection system'
        },
        {
            title: '80+',
            info: 'Customers make use of our Loan Management System'
        },
        {
            title: '1',
            info: 'New loan booked every second'
        },
    ]

    return (
        <div className='w-full flex-col justify-center items-center pt-32 pb-28'>
            <div className="flex justify-center items-center pb-12">
                <p className='pb-3 text-3xl text-black font-semibold'>
                    Transforming Banking Worldwide
                </p>
            </div>
            <div className="flex justify-center items-center pl-[5%] pr-[5%]">
                <div className='w-full relative'>
                    <ChevronLeft className='swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-[#575757] w-12 h-12'/>
                    <ChevronRight className='swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-[#575757] w-12 h-12'/>
                    <Swiper navigation={{prevEl:'.swiper-button-prev-custom', nextEl:'.swiper-button-next-custom'}} modules={[Navigation]} slidesPerView={4} spaceBetween={'10'} className="w-[90%]">
                        {items.map((item,index)=> (
                            <SwiperSlide className=''>
                                <div>
                                    <h1 className='text-7xl leading-none font-semibold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-800 bg-clip-text text-transparent'>
                                        {item.title}
                                    </h1>
                                    <p className='text-black'>
                                        {item.info}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Slide