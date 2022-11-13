import styled from "styled-components";

interface ImageProps {
  image: string
}

export const Image = styled.div<ImageProps>`
  background: url(${({ image }) => image});
  width: 145px;
  height: 145px;

  /* position: absolute; */
  /* top: 0; */

  background-position: center;
  background-size: cover;

  border-radius: 50%;
  border: 5px solid #FFFFFF;
`