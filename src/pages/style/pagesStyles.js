import styled from "styled-components"

export const PageSection = styled.section`
  padding: 1em;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.smallLayoutWidth}px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQ.medium} {
    flex-direction: row;
    align-items: center;
    max-width: ${({ theme }) => theme.layoutWidth}px;
  }
`
