import { ReactNode } from 'react'
import { Container, Wrapper, ContentContainer } from './Content.styles'

export function Content({ children }: { children: ReactNode }) {
  return (
    <Container>
      <ContentContainer>
        <Wrapper>{children}</Wrapper>
      </ContentContainer>
    </Container>
  )
}
