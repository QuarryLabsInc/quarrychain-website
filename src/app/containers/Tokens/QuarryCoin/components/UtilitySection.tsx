import React from 'react'
import UtilityCard from './UtilityCard'
import { querriesUtilities } from '../data/QuarryCoin'
import { assetPaths } from '../../../../common/constants'

const UtilitySection = () => {
  const mappedQuerryCards = querriesUtilities.map((data, index) => (
    <div
      key={index}
      className={`flex ${index % 2 === 0 ? 'justify-start lg:items-start lg:pl-10' : 'justify-end lg:items-start lg:pr-10'}`}
    >
      <UtilityCard
        cardNo={index + 1}
        cardTitle={data.querryTitle}
        cardText={data.querryText}
      />
    </div>
  ))
  return (
    <div className='relative mt-20 px-5'>
      <h2 className='text-[#553499] block lg:hidden text-[40px] font-bold text-center mb-10'>Utilities</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 relative z-[2] max-w-[1440px] mx-auto justify-between md:gap-y-[100px] lg:gap-y-[150px] xl:gap-y-[250px]'>
        {mappedQuerryCards}
      </div>
      <img
        src={assetPaths.UTILITY_BACKGROUND}
        alt='utility'
        className='absolute top-0 z-1 left-[50%] translate-x-[-50%] hidden lg:block'
      />
    </div>
  )
}

export default UtilitySection
