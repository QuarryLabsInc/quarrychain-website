import { assetPaths } from '../../../../common/constants'
import {
  ButtonsContainer,
  Container,
  Content,
  HeroImageView,
  SloganContainer,
  StyledButton,
  StyledSpan,
  TitleAndButtonsContainer,
  StyledTitleContainer,
  StyledTitle,
} from './Introduction.styles'

export function Introduction() {
  function handleLaunchClick() {
    window.open('https://dapp.quarrychain.network/', '_blank')
  }

  return (
    <Container>
      <Content>
        <HeroImageView src={assetPaths.HERO_LOGO} />
        <TitleAndButtonsContainer>
          <StyledTitleContainer>
            <StyledTitle color='#027DC9'>Quarry</StyledTitle>
            <StyledTitle color='#565656'>Chain</StyledTitle>
          </StyledTitleContainer>
          <SloganContainer>
            <StyledSpan>The Future of Blockchain.</StyledSpan>
            <StyledSpan>Built for Everyone</StyledSpan>
          </SloganContainer>
          <ButtonsContainer>
            <StyledButton
              withMarginRight
              onClick={handleLaunchClick}
            >
              Launch App
            </StyledButton>
            <StyledButton variant='secondary'>Learn More</StyledButton>
          </ButtonsContainer>
        </TitleAndButtonsContainer>
      </Content>
    </Container>
  )
}
