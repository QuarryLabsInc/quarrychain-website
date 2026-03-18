import { Container, Hexagon, HexagonQuarter, HexagonYearContainer, StyledSpan } from './DateFigure.styles';
import { DateFigureProps } from './types';

export function DateFigure({ color, number, mobile }: DateFigureProps) {
  return (
    <Container quarter={!mobile && number}>
      <Hexagon color={color}>
        <HexagonQuarter>
          <StyledSpan>
            Q{number}
          </StyledSpan>
        </HexagonQuarter>
      </Hexagon>
    </Container>
  )
};
