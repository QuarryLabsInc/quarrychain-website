import { assetPaths } from '../../../common/constants'
import RealWorldCard from './components/RealWorldCard'
import QuerryCard from './components/QuerryCard'
import QuerryStepsCard from './components/QuerryStepsCard'
import {
  realWorldAssetsData,
  approchQuerrySteps,
} from './data/realWorldAssetsData'
import { Content } from '../../../common/Content'
import { HeroSection, SectionWrapper } from './RealWorldAssets.styles'

export function RealWorldAssets() {
  const realWorldMappedData1 = realWorldAssetsData.slice(0, 3).map((assets, index) => (
    <RealWorldCard
      image={assets.imgPath}
      title={assets.title}
      lists={assets.list}
      key={index}
    />
  ))

  const realWorldMappedData2 = realWorldAssetsData.slice(-3).map((assets, index) => (
    <RealWorldCard
      image={assets.imgPath}
      title={assets.title}
      lists={assets.list}
      key={index}
    />
  ))

  const approchQuerryMappedSteps = approchQuerrySteps.map((steps, index) => (
    <QuerryStepsCard
      imgPath={steps.image}
      title={steps.title}
      text={steps.text}
      isReverse={steps.isReverse}
      key={index}
      index={index}
    />
  ))
  return (
    <>
      <Content>
        <HeroSection>
          <div className='flex flex-col items-center justify-center lg:-mt-28 py-10 px-5 relative z-[1]'>
            <h1 className='pb-6 text-[#553499] xl:text-[50px] lg:text-[40px] text-[30px] max-w-[750px]'>
              Tokenization <br /> of Real World Assets
            </h1>
            <img
              src={assetPaths.REAL_WORLD_ASSETS}
              className='w-[300px] xl:w-[460px]'
              alt='real world assets'
            />
            <p className='text-[#000000] opacity-50 font-[400] text-[16px] xl:max-w-[750px] max-w-[600px] font-calibri'>
              QuarryChain enables tokenization of assets in a variety of
              industries to create vast liquidity across the whole global asset
              market. QuarrySwap can turn almost any asset, real or virtual,
              into a digital token to be owned, traded, transferred, or stored
              without the use of a central third-party or intermediary.
              QuarryChain’s Native Smart Contracts power QuarrySwap’s
              tokenization features and associated digital assets.
            </p>
          </div>
          <img
            src={assetPaths.REAL_WORLD_ASSETS_PAGE_WRAPPER}
            alt='real world assets'
            className='absolute hidden lg:block z-0'
          />
        </HeroSection>

        <SectionWrapper>
          <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 px-5 md:px-10 py-10 md:py-20 gap-5 md:gap-10'>
            {realWorldMappedData1}
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 px-5 md:px-10 py-10 md:py-20 gap-5 md:gap-10'>
            {realWorldMappedData2}
          </div>
        </SectionWrapper>
      </Content>

      <QuerryCard />

      <div className='bg-gradient-secondary px-5 py-20'>
        <div className='max-w-[1440px] mx-auto'>{approchQuerryMappedSteps}</div>
      </div>
    </>
  )
}
