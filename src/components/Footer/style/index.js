import styled from "styled-components"

export const StyledFooter = styled.footer`
  padding: 1em;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  text-align: center;
  margin-top: 5em;
  ${({ theme }) => theme.mediaQ.medium} {
    margin-top: 0;
    padding: 2em 1em 1em 1em;
  }
`
