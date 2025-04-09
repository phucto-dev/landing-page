import React from 'react'
import Innovating from '@/assets/img/Innovating.webp'
import { Button } from '../ui/button';
import Pagi from '../ui/pagi';

interface Props { }

const Banner = (props: Props) => {
    return (
        <div className=''>
            <div className="animate">
                <div className='h-[600px] bg-cover bg-center flex justify-center items-center relative' style={{ backgroundImage: `url(${Innovating.src})` }}>
                    <div className="w-[80%] h-[90%]flex">
                        <div className="w-[60%] h-full flex justify-center items-center">
                            <div>
                                <h1 className='text-4xl font-semibold py-2'>
                                    Innovating with Digital Lending Solutions That Eliminate Department Siloes
                                </h1>
                                <p className='py-2'>
                                    Creating a seamless ecosystem enhances collaboration, improves communication, and fosters innovation, ultimately driving growth and profitability for banks.
                                </p>
                                <Button className="rounded-full px-4 py-6 mt-4 h-10 w-40 bg-white text-black text-base hover:cursor-pointer">
                                    Connect with us
                                </Button>
                            </div>
                        </div>
                        <div className="h-full"></div>
                    </div>
                    <div className="absolute left-20 bottom-0 p-4">
                        <Pagi />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;