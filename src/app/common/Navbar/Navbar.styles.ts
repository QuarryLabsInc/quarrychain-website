import styled from "styled-components";
import media from "styled-media-query";

export const NavbarContainer = styled.div`
  position: relative;
  height: 100%;
  max-height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 40px;
  background-color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[0]};
  position: fixed;
  z-index: 100;

  ${media.lessThan("medium")`
    position: static;
    padding: 15px;
  `}
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;
