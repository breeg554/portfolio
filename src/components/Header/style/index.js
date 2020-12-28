import styled from "styled-components"
export const HeaderComponent = styled.header`
  position: absolute;
  z-index: 10;
  width: 100%;
`
export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.layoutWidth}px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQ.medium} {
    padding: 1em 2em;
  }
  ${({ theme }) => theme.mediaQ.large} {
    padding: 1em 3em;
  }
`
export const OpenMenuBtn = styled.button`
  position: relative;
  z-index: 100;
  cursor: pointer;
  border: none;
  padding: 5px;
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  outline: none;
  span {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    width: 70%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 10px;
  }
  span:nth-of-type(1) {
    transform: translate(-50%, -50%) translateY(-200%);
  }
  span:nth-of-type(2) {
    top: 50%;
  }
  span:nth-of-type(3) {
    transform: translate(-50%, -50%) translateY(200%);
  }
  ${({ theme }) => theme.mediaQ.medium} {
    display: none;
  }
`
export const Logo = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    width: 100px;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    width: 100px;
  }
`
