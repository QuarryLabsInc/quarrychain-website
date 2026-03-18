import { assetPaths } from '../../../../common/constants'

const QuerryCard = () => {
  return (
    <div className='w-full text-center mx-auto bg-gradient-primary py-20 px-5'>
      <div className='max-w-[600px] mx-auto flex flex-col gap-5'>
        <img
          src={assetPaths.REAL_WORLD_ASSETS}
          className='w-[300px] xl:w-[374px] mx-auto'
          alt='real world assets'
        />
        <div className='text-[#553499] text-[24px] font-bold'>
          How QuarryChain will Approach Tokenization
        </div>
        <div className='text-[16px] font-calibri'>
          <p className='font-normal'>
            The QuarryChain Network will allow the creation of Digital
            Representation of Assets through Tokenization. This process does not
            greatly differ from other IT projects whereby data models are
            created to represent assets or goods.{' '}
          </p>
          <p className='font-normal'>
            {' '}
            In simple terms, asset tokenization consists of creating an
            informatic code presenting the key characteristics of the assets
            while exposing some functions allowing the user to interact with the
            digital representaion of the asset. On QuarryChain, this formatic
            code is developed in Solidity.
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuerryCard
