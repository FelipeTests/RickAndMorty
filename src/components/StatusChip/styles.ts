import styled from "styled-components";

import type { Color } from "./StatusChip";

export const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`

interface IndicatorProps {
  color: Color
}

export const Indicator = styled.div<IndicatorProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  background-color: ${({ color }) => color === 'red' ? '#ff0000' : '#B2DF28'};
`