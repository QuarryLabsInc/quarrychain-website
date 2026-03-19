import React from 'react'

interface UtilityCards {
  cardNo: number
  cardTitle: string
  cardText: string
}

const UtilityCard: React.FC<UtilityCards> = ({
  cardNo,
  cardText,
  cardTitle,
}) => {
  return (
    <div className='flex flex-col w-full lg:max-w-[300px] p-5 bg-[#FFFFFF] drop-shadow-lg rounded-[30px] relative'>
      <div className='flex flex-col items-center  justify-between'>
        <div className='w-[50px] h-[50px] rounded-full bg-[#BAEFFB] flex items-center justify-center border-2 border-white absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h1 className='text-black text-xl'>{cardNo}</h1>
        </div>
        <div className='flex flex-col items-center w-full pt-5'>
          <h2 className='text-[#553499] text-[18px] mb-1 text-center'>
            {cardTitle}
          </h2>
          <p className='text-black/50 text-[14px] text-center'>{cardText}</p>
        </div>
      </div>
    </div>
  )
}

export default UtilityCard
