import React from 'react'
import { GradientHeading } from '../RealWorldAssets.styles'

interface QuerryStepsCards {
  title: string
  text: string
  imgPath: string
  isReverse: boolean
  index: number
}

const QuerryStepsCard: React.FC<QuerryStepsCards> = ({
  title,
  text,
  imgPath,
  isReverse,
  index,
}) => {
  return (
    <div
      className={`flex ${
        isReverse
          ? 'flex-col-reverse lg:flex-row'
          : 'flex-col-reverse lg:flex-row-reverse'
      } mt-10 rounded-[17px] w-full justify-center items-center`}
    >
      <div className='w-full lg:w-1/2 px-4 lg:px-8 flex flex-col justify-center items-center lg:items-start text-center bg-white rounded-[30px] p-5 relative'>
        <p className='text-[20px] font-extrabold w-full'>{title}</p>
        <p className='text-base leading-relaxed mt-2 font-calibri opacity-50'>
          {text}
        </p>

        <div className='size-[40px] flex items-center justify-center rounded-full bg-[#BAEFFB] absolute top-0 left-[50px] translate-y-[-50%]'>
          <p className='text-[14px] font-extrabold'>{index + 1}</p>
        </div>
      </div>
      <div className='w-full lg:w-1/2 flex justify-center items-center p-5'>
        <img
          className=' '
          src={imgPath}
          alt={title}
        />
      </div>
    </div>
  )
}

export default QuerryStepsCard
