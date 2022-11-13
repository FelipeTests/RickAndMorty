import styled from "styled-components"

export const Container = styled.button`
  width: 125px;
  height: 82px;

  background-color: #081F32;
  border: none;
  color: #FFFFFF;
  font-size: 1.2rem;
  cursor: pointer;

  position: relative;
`

export const ActiveAdornment = styled.div`
  width: 100%;
  height: 5px;
  
  position: absolute;
  bottom: 0;
  left: 0;

  background-color: #B2DF28;
`