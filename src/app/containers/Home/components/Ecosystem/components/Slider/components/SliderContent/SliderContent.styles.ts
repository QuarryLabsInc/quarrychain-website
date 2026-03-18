import styled from 'styled-components'
import media from 'styled-media-query'
import { Paragraph } from '../../../../../../../../common/Typography/Paragraph'
import { Title } from '../../../../../../../../common/Typography/Title'
const isSafari =
  (window as any).safari ||
  navigator.userAgent.match(/(iPod|iPhone|iPad)/) ||
  navigator.userAgent.match(/AppleWebKit/)

export const Container = styled.div<{ step: number }>`
  width: 75%;
  height: 360px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  padding: 30px;
  transition: all 0.3s ease-in-out;

  ${media.lessThan('large')`
    width: 100%;
    min-height: 300px;
    height: 100%;
    padding: 20px;
    margin-bottom: 40px;
  `}
`

export const Content = styled.div`
  padding: 50px 48px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;

  ${media.lessThan('medium')`
    padding: 20px;
  `}
`

export const TitleAndDescriptionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  ${media.lessThan('huge')`
    width: 72%;
  `}

  ${media.lessThan('large')`
    width: 100%;
    align-items: center;
  `}
`

export const StyledTitle = styled(Title)`
  font-size: 32px;
  line-height: 41px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[400]};
  margin-bottom: 16px;
`

export const Description = styled(Paragraph)`
  font-size: 20px;
  line-height: 25px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[150]};
  ${media.lessThan('huge')`
      font-size: 17px;
  `}
`

export const HexagonImageContainer = styled.div`
  height: 100%;
  margin-right: 30px ${media.lessThan('huge')`
    display: flex;
    align-items: center;
margin-right:30px
    justify-content: center;
  `} ${media.lessThan('large')`
      display: none;
  `};
`

export const HexagonImage = styled.img`
  width: 100%;
  height: 100%;
  margin-right: 30px ${media.lessThan('huge')`
    height: 80%;
margin-right:30px

  `} ${isSafari &&
    `
    width: auto;
  `};
`
