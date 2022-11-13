import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const DialogCard = styled.div`
  position: fixed;
  background-color: #FFFFFF;

  width: 70%;
  min-height: 200px;
  max-height: 90vh;
  overflow-y: auto;

  border-radius: 10px;
`

export const CloseButton = styled.div`
  background-color: #FFFFFF;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;

  position: absolute;

  cursor: pointer;

  top: 5px;
  right: 5px;

  border: 1px solid #000000
`