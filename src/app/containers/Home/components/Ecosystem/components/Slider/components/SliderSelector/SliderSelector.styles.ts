import styled from 'styled-components'
import media from 'styled-media-query'
import { AppTheme } from '../../../../../../../../global/theme'

export const Container = styled.div`
  width: 15%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.between('large', 'huge')`
    width: 35%;
  `}

  ${media.between('medium', 'large')`
    width: 50%;
  `}

  ${media.lessThan('medium')`
    width: 65%;
  `}
`

export const StepCircle = styled.div<{ isCurrent?: boolean }>`
  width: 24px;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }: { theme: typeof AppTheme }) =>
    theme.colors.neutral[0]};
  opacity: 0.5;
  cursor: pointer;

  ${({ isCurrent, theme }: { isCurrent?: boolean; theme: typeof AppTheme }) =>
    isCurrent &&
    `
  opacity: 1;
  background: ${theme.colors.primary[0]};
  `}
`
