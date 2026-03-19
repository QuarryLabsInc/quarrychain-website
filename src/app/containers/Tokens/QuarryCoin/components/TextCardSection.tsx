import UtilityCard from './UtilityCard'
import { bennifitData } from '../data/QuarryCoin'

const BenifitTextContainer = () => {
  const mappedBenifitsData = bennifitData.map((data, index) => (
    <UtilityCard
      key={index}
      cardNo={index + 1}
      cardTitle={data.title}
      cardText={data.text}
    />
  ))

  return (
    <div className='w-full py-8 px-4 sm:px-8 lg:px-12 lg:mt-[-200px] relative z-10'>
      <h2 className='text-[#553499] text-[40px] font-bold text-center'>
        Benefits
      </h2>
      <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center gap-10 mt-16'>
        {mappedBenifitsData}
      </div>
    </div>
  )
}

export default BenifitTextContainer
