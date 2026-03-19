import { Content } from '../../../common/Content'
import QuerryCoinHeader from './components/QuerryCoinHeader'
import BenifitTextContainer from './components/TextCardSection'
import UtilitySection from './components/UtilitySection'

export function QuarryCoin() {
  return (
    <div className='pb-10'>
      <Content>
        <QuerryCoinHeader />
      </Content>
      <BenifitTextContainer />
      <UtilitySection />
    </div>
  )
}
