import {
  Container,
  Content,
  Image,
  ImageContainer,
  StyledParagraph,
  StyledTitle,
} from './SummaryCard.styles'
import { SummaryCardProps } from './types'

export function SummaryCard({
  title,
  description,
  imageUrl,
  reverse,
}: SummaryCardProps) {
  return (
    <Container>
      <Content>
        <StyledTitle>{title}</StyledTitle>
        <StyledParagraph>{description}</StyledParagraph>
      </Content>
      <ImageContainer reverse={reverse}>
        <Image src={imageUrl} />
      </ImageContainer>
    </Container>
  )
}
