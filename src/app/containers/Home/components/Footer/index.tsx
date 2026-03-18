import { assetPaths } from '../../../../common/constants'
import FooterInfo from './components/FooterInfo'
import FooterLinks from './components/FooterLinks'
import FooterTeam from './components/FooterTeam'

export function Footer() {
  return (
    <footer className='bg-cover bg-center pt-8 pb-8 md:pb-0 bg-[#EFFDFE] relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-[1] relative'>
        <div className='flex flex-col md:flex-row justify-between'>
          <FooterInfo />
          <FooterLinks />
          <FooterTeam />
        </div>
      </div>
      <img
        className='w-full md:h-full md:object-cover absolute md:static bottom-0 z-0'
        src={assetPaths.FOOTER_BG}
        alt='Footer Background'
      />
    </footer>
  )
}
