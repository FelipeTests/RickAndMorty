import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
`

export const Label = styled.div`
  color: #515151;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Value = styled.div`
  color: #000000;
  font-size: 16px;

  text-overflow: ellipsis;
`

export const Footer = styled.div`
  margin-top: 8px;

  color: #515151;
  font-size: 12px;
`
