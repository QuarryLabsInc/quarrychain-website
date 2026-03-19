import { assetPaths } from '../../../../common/constants'
import { Container } from './QuerryCoinHeader.styles'

const QuerryCoinHeader = () => {
  return (
    <Container>
      <div className='flex flex-col justify-between items-center w-11/12 mx-auto py-10 md:pt-[150px] md:pb-[200px]'>
        <div className='flex items-center justify-center flex-col gap-5'>
          <div className='flex items-center justify-center flex-col'>
            <h1 className='text-[30px] md:text-[40px]'>
              <span className='text-[#027DC9]'>Quarry</span>
              <span className='text-[#565656]'>Chain</span>
              <span className='text-[#553499]'> Ecosystem</span>
            </h1>

            <h2 className='text-[#565656] text-[22px] md:text-[28px]'>
              Quarry (QRY)
            </h2>
          </div>

          <img
            className='size-[150px] md:size-[256px] object-contain'
            src={assetPaths.ECOSYSTEM_LOGO}
            alt='Quarry'
          />

          <div className='max-w-[755px] font-calibri text-center text-base text-[18px]'>
            Quarry (QRY) is the official cryptocurrency and utility token for
            the QuarryChain Network. Quarry aims to be a peer-to-peer digital
            currency that will enable lightning fast low cost transactions to
            anyone in the world. Quarry will also be used to access and connect
            the entire QuarryChain Ecosystem, with an abundance of application
            scenarios that power transactions and applications on the chain.
          </div>
        </div>
      </div>
    </Container>
  )
}

export default QuerryCoinHeader
