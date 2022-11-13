import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  cursor: pointer;

  max-width: 363px;
  max-height: 151px;
`

interface ImageProps {
  image: string
}

export const Image = styled.div<ImageProps>`
  border-radius: 10px 0 0 10px;
  width: 154px;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  gap: 5px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  border-radius: 0 10px 10px 0;
  border: 1px solid #B9B9B9;
`