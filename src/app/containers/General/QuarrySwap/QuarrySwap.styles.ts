import styled from 'styled-components'
import { assetPaths } from '../../../common/constants'

export const SectionWrapper = styled.div`
  position: relative;
  background-image: url(${assetPaths.SWAP_BACKGROUND});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 70px 0 200px;
`

export const CardWrapper = styled.div`
  background-image: url(${assetPaths.SWAP_BACKGROUND2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 0;
`
