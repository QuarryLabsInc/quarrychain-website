import styled from 'styled-components'
import media from 'styled-media-query'
import { Title } from '../../../../common/Typography/Title'

export const Container = styled.section`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary[25]};

  ${media.lessThan('large')`
    height: auto;
    padding: 20px 0px;
  `}
`

export const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  ${media.lessThan('large')`
    width: 80%;
  `}
`

export const TitleWrapper = styled(Title)`
  display: flex;
`

export const StyledTitle = styled(Title)`
  margin-bottom: 40px;

  ${media.lessThan('huge')`
    text-align: center;

  `}

  ${media.between('large', 'huge')`
    font-size: 40px;
    line-height: 40px;
  `}

  ${media.lessThan('medium')`
    font-size: 30px;
    line-height: 30px;
  `}
`

export const ImageView = styled.img<{ top?: string, left?: string, right?: string, bottom?: string }>`
  position: absolute;
  top: ${({ top }) => top || 'unset'};
  left: ${({ left }) => left || 'unset'};
  right: ${({ right }) => right || 'unset'};
  bottom: ${({ bottom }) => bottom || 'unset'};

  ${media.between('large', 'huge')`
    width: 600px;
  `}
  

  ${media.between('medium', 'large')`
    width: 400px;
  `}

  ${media.lessThan('medium')`
    width: 200px;
  `}
`

export const PolygonImageView = styled.img<{ top?: string, left?: string, right?: string, bottom?: string }>`
  position: absolute;
  top: ${({ top }) => top || 'unset'};
  left: ${({ left }) => left || 'unset'};
  right: ${({ right }) => right || 'unset'};
  bottom: ${({ bottom }) => bottom || 'unset'};

  ${media.between('large', 'huge')`
    width: 200px;
  `}

  ${media.between('medium', 'large')`
    width: 150px;
  `}

  ${media.lessThan('medium')`
    width: 100px;
  `}
`
