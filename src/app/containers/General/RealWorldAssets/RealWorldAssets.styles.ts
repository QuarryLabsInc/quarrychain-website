import styled from "styled-components";
import { assetPaths } from "../../../common/constants";
import media from 'styled-media-query'

export const HeroSection = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  height: 1089px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${assetPaths.REAL_WORLD_ASSETS_PAGE_BG});
  background-color: #EFFDFE;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${media.between('large', 'huge')`
    height: 900px;
  `}

  ${media.lessThan('large')`
    height: 800px;
  `}

  ${media.lessThan('medium')`
    height: unset;
  `}
`;

export const SectionWrapper = styled.div`

  background-image: url(${assetPaths.REAL_WORLD_SECTION_BG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


`

export const GradientHeading = styled.h1`
  background: linear-gradient(to right, #1FC7D4, #553499);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 30px; 
  font-weight: bold;
`;