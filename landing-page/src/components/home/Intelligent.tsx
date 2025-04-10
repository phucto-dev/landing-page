import { Divide } from 'lucide-react'
import React from 'react'

type Props = {}

const Intelligent = (props: Props) => {
  const items = [
    {
      title: '',
      info: '',
      img: ''
    },
    {
      title: '',
      info: '',
      img: ''
    },
    {
      title: '',
      info: '',
      img: ''
    },
    {
      title: '',
      info: '',
      img: ''
    },
    {
      title: '',
      info: '',
      img: ''
    },
    {
      title: '',
      info: '',
      img: ''
    },
  ]
  return (
    <div className='w-[80%] flex items-stretch  pt-32 pb-16'>
      <div className='w-[40%] relative'>
        <div className="tracking-wider sticky top-10 pr-4 mb-4 xl:mb-0">
          <h1 className='text-[44px] leading-none  font-semibold pb-7 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-800 bg-clip-text text-transparent'>
            Unleash Intelligent Decisioning & Automated Workflows
          </h1>
          <p className='pb-3 text-xl text-[#575757] font-medium'>
          Improve productivity & enable sales via real time, personalised offers and automated credit decisions.
          </p>
          <p className='pb-3 text-xl text-[#575757] font-medium'>
          540+ APIs and modular products for a composable approach to banking & lending.
          </p>
        </div>
      </div>
      <div className='w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4'>
        {items.map((item, index) => (
          <div key = {index} className='bg-blue-200 p-4 text-center h-[28rem] rounded-2xl'>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Intelligent