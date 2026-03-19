import React from 'react'

interface QuerryCards {
  index: number
  imgPath: string
  heading: string
  text: string
}

const QuerryCard: React.FC<QuerryCards> = ({
  index,
  imgPath,
  heading,
  text,
}) => {
  return (
    <div
      className={`bg-white rounded-[30px] shadow-lg drop-shadow-lg lg:max-w-[450px] text-center relative ${index < 2 ? 'ml-auto' : ''}`}
    >
      <img
        src={imgPath}
        alt={heading}
        className={`w-24 lg:block hidden h-24 absolute ${index < 2 ? '-bottom-[10px] left-[50%] -translate-x-[50%] translate-y-[100%]' : '-top-[10px] left-[50%] -translate-x-[50%] -translate-y-[100%]'}`}
      />

      <img
        src={imgPath}
        alt={heading}
        className={`w-24 lg:hidden block h-24 absolute right-0 translate-x-[-10px] translate-y-[-50%] top-0`}
      />

      <div className='p-10'>
        <h3 className='text-lg font-bold text-[#553499]'>{heading}</h3>
        <p className='mt-2 text-sm text-black/50 font-calibri'>{text}</p>
      </div>

      <div className='absolute size-[40px] rounded-full bg-[#BAEFFB] border-white border-solid border-2 flex items-center justify-center top-0 left-[50px] translate-y-[-50%]'>
        <p className='text-black text-base font-calibri'>{index + 1}</p>
      </div>
    </div>
  )
}

export default QuerryCard
