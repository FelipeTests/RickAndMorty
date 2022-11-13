import styled from "styled-components";

export const Container = styled.div`
  height: 484px;

  border-radius: 10px 10px 0 0;
`

export const Image = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)),url('/images/detail-background.png'), no-repeat;
  height: 242px;
  background-size: cover;
  border-radius: 10px 10px 0 0;
`

export const AvatarWrapper = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
`

export const InfoWrapper = styled.div`
  background-color: #081F32;
  height: 242px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #FFFFFF;

  > div:first-of-type {
    position: absolute;
    top: -90px;
  }
`

export const DetailsWrapper = styled.div`
  margin-top: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
`