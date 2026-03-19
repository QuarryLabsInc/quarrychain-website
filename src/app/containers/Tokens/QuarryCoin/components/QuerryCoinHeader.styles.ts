import styled from "styled-components";
import { assetPaths } from "../../../../common/constants";

export const Container = styled.div`
  position: relative;
  background-image: url(${assetPaths.ECOSYSTEM_BACKGROUND});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;