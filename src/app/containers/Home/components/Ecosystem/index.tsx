import { assetPaths } from '../../../../common/constants'
import { Slider } from './components/Slider'
import { Container, Content, ImageView, PolygonImageView, StyledTitle, TitleWrapper } from './Ecosystem.styles'

export function Ecosystem() {
  return (
    <Container>
      <PolygonImageView src={assetPaths.ECOSYSTEM_POLYGON_LEFT} top='0' left='0' alt='Ecosystem Background' />
      <PolygonImageView src={assetPaths.ECOSYSTEM_POLYGON_RIGHT} bottom='0' right='0' alt='Ecosystem Background' />
      <ImageView src={assetPaths.ECOSYSTEM_CORNER_TOP} top='0' right='0' alt='Ecosystem Background' />
      <ImageView src={assetPaths.ECOSYSTEM_CORNER_BOTTOM} bottom='0' left='0' alt='Ecosystem Background' />
      <Content>
        <TitleWrapper>
          <StyledTitle color='#027DC9'>Quarry</StyledTitle>
          <StyledTitle color='#565656'>Chain</StyledTitle>
          <StyledTitle className='ml-5'>Ecosystem</StyledTitle>
        </TitleWrapper>
        <Slider />
      </Content>
    </Container>
  )
}
