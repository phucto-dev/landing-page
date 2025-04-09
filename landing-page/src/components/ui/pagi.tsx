import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
type Props = {}
const Pagi = (props: Props) => {
  return (
    <div className='flex justify-center items-center text-xl'>
        <ArrowLeft className='m-2 hover:cursor-pointer'/>
        <p className='tracking-widest'>{1}/{5}</p>
        <ArrowRight className='m-2 hover:cursor-pointer'/>
    </div>
  )
}

export default Pagi;