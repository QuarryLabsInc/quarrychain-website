import styled from 'styled-components'
import media from 'styled-media-query'
import { Button } from '../../../../common/Button'
import { Span } from '../../../../common/Typography/Span'
import { Title } from '../../../../common/Typography/Title'
import { assetPaths } from '../../../../common/constants'
const isSafari =
  (window as any).safari ||
  navigator.userAgent.match(/(iPod|iPhone|iPad)/) ||
  navigator.userAgent.match(/AppleWebKit/)

export const Container = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  padding-top: 80px;
  background-image: url(${assetPaths.HERO_BACKGROUND});
  background-size: cover;
  background-position: center;

  ${media.between('medium', 'large')`
    height: ${isSafari ? '75%' : '50%'};
  `}

  ${media.lessThan('medium')`
    padding: 40px 0px;
    height: auto;
  `};
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.between('medium', 'large')`
    width: 80%;
  `}

  ${media.lessThan('medium')`
    width: 80%;
  `};
`

export const TitleAndButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SloganContainer = styled.div`
  margin: 8px 0px 32px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
    margin: 12px 0px;
  `}
`

export const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledTitle = styled(Title)`
  font-size: 4em;
  line-height: 108px;
  font-weight: 600;

  ${media.lessThan('medium')`
    align-self: center;
    font-size: 2em;
    line-height: 36px;
    letter-spacing: 0.15em;
  `}
`

export const StyledSpan = styled(Span)`
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary[100]};
  font-size: 32px;
  line-height: 51px;
  font-weight: 400px;
  letter-spacing: 0.1em;

  ${media.lessThan('medium')`
   font-size: 18px;
   line-height: 18px;
   letter-spacing: 0.02em;
  `}
`

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
   margin-top: auto;
   justify-content: center;
  `}
`

export const StyledButton = styled(Button)<{ withMarginRight?: boolean }>`
  max-width: 200px;

  ${({ withMarginRight }) =>
    withMarginRight &&
    `
  margin-right: 24px;
  `}
`

export const HeroImageView = styled.img`
  width: 200px;

  ${media.lessThan('medium')`
    width: 100px;
  `};
`

export const ImageContainerMobile = styled.div`
  display: none;
  width: 280px;
  margin-bottom: 20px;

  ${media.lessThan('medium')`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
