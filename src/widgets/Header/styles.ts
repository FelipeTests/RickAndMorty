import styled from "styled-components"

export const Container = styled.header`
  height: 30vh;
  min-height: 370px;
  background: url('/images/background.png');
  background: linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),url('/images/background.png'), no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;

  > nav {
    position: absolute;
    bottom: 0;
  }
`