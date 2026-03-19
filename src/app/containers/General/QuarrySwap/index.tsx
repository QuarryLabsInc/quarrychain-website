import { assetPaths } from '../../../common/constants'
import { CardWrapper, SectionWrapper } from './QuarrySwap.styles'
import QuerryCard from './components/QuerryCard'
import { querryData } from './data/querrySwapData'

export function QuarrySwapDetails() {
  return (
    <div className='md:pt-[80px]'>
      <SectionWrapper>
        <div className='w-full text-white flex flex-col items-center justify-center max-w-[1200px] mx-auto relative px-5 gap-7'>
          <h1 className='text-[50px] lg:text-[60px] text-center text-[#027DC9]'>
            Quarry<span className='text-[#565656]'>Swap</span>
          </h1>

          <img
            className='mx-auto size-[200px] lg:size-[350px]'
            src={assetPaths.QUERRY_SWAP_LOGO}
            alt='querry swap'
          />

          <img
            className='absolute top-0 left-[100px] size-[140px] hidden lg:block'
            src={assetPaths.SWAP_IMAGE1}
            alt='querry swap'
          />
          <img
            className='absolute top-0 right-[100px] size-[140px] hidden lg:block'
            src={assetPaths.SWAP_IMAGE2}
            alt='querry swap'
          />
          <img
            className='absolute bottom-0 left-0 size-[140px] hidden lg:block'
            src={assetPaths.SWAP_IMAGE3}
            alt='querry swap'
          />
          <img
            className='absolute bottom-0 right-0 size-[140px] hidden lg:block'
            src={assetPaths.SWAP_IMAGE4}
            alt='querry swap'
          />

          <div className='text-black opacity-50 font-calibri text-center max-w-[750px] text-base lg:text-[18px]'>
            QuarrySwap is a decentralized exchange (DEX, for short), and one of
            QuarryChain's first Applications. QuarrySwap also happens to be
            non-custodial, meaning that unlike centralized exchanges, QuarrySwap
            does not need to possess your tokens in order for you to be able to
            trade them. QuarrySwap allows users to safely and securely stake a
            variety of cryptocurrencies and tokenized real world assets.
          </div>
        </div>
      </SectionWrapper>

      <CardWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-[80px] lg:gap-y-[150px] px-5 max-w-[1440px] mx-auto lg:mt-[-130px]'>
          {querryData.map((card, index) => (
            <QuerryCard
              index={index}
              imgPath={card.imgPath}
              heading={card.heading}
              text={card.text}
              key={index}
            />
          ))}
        </div>
      </CardWrapper>
    </div>
  )
}
