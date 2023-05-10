import styled from 'styled-components'
import background from '../../assets/background.svg'

export const Container = styled.div`
  background: url('${background}');
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  height: 100%;
  min-height: 100vh;
`

export const Image = styled.img`
  margin-top: 30px;
`

export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;

  margin-left: 25px;
`

export const Input = styled.input`
  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  padding-left: 25px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
  margin-bottom: 25px;

  ::placeholder {
    color: white;
  }
`





