import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const List = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`