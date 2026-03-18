import { Container, ItemText, ListContainer, ListItem, StyledDescription, StyledTitle } from './Card.styles';
import { RoadmapCardProps } from './types';

export function Card({ title, description, items, color }: RoadmapCardProps) {
  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription color={color}>{description}</StyledDescription>
      <ListContainer>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ItemText>
              {item}
            </ItemText>
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  )
}
