import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  background: ${props => props.isCheck ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
  border-radius: 14px;
  border: ${props => props.isCheck ? '1px solid #FFFFFF' : 'none'};
  margin-top: 130px;

  font-weight: 700;
  font-size: 17px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  margin-bottom: 50px;

  img {
    transform: ${props => props.isCheck && 'rotateY(180deg)'};
  }
`