import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),url('/images/background.png'), no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 456px) {
    > img:nth-of-type(2) {
      width: 280px;
      height: 150px;
    }
  }
`

export const InfoWrapper = styled.div`
  width: 70%;
  text-align: center;
`

export const Title = styled.h1`
  color: #fff;
`

export const Description = styled.p`
  color: #fff;
`
