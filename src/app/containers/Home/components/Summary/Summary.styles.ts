import styled from "styled-components";
import media from "styled-media-query";
import { Title } from "../../../../common/Typography/Title";
import { assetPaths } from "../../../../common/constants";

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${assetPaths.SUMMARY_BACKGROUND});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;

  ${media.lessThan("large")`
    height: auto;
    padding: 30px 0px;
  `}
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 80px;

  ${media.lessThan("huge")`
    font-size: 40px;
    text-align: center;
  `}

  ${media.between("medium", "large")`
    margin-bottom: 20px;
  `};

  ${media.lessThan("medium")`
    font-size: 30px;
    margin-bottom: 20px;
  `}
`;

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  align-items: start;
  justify-items: center;

  /* Third card: full-width row, centered */
  & > *:nth-child(3) {
    grid-column: 1 / -1;
    justify-self: center;
    width: 100%;
    max-width: 420px;
  }

  ${media.between("medium", "large")`
    gap: 20px;

    & > *:nth-child(3) {
      max-width: 200px;
    }
  `}

  ${media.between("large", "huge")`
    & > *:nth-child(3) {
      max-width: 300px;
    }
  `}

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
    gap: 0;

    & > *:nth-child(3) {
      grid-column: auto;
      justify-self: stretch;
      max-width: none;
    }
  `}
`;
