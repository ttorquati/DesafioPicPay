import styled, { keyframes, css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.75);
  border-radius: 8px;

  ${breakpoint('desktop')`
    width: 640px;
  `}
`;

export const ModalHeader = styled.div`
  border: none;
  display: none;
  border-radius: 8px 8px 0 0; /*Verificar*/

  ${breakpoint('desktop')`
      background: #474971; 
      border: none;      
      height: 51px;
      
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 24px;
      
      strong {
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
      }

      span {
        color: #7de6c6;
      }

      button {
        color: #fff;
        visibility: hidden;
      }
    }
  `}
`;

export const Form = styled.form`
  background: linear-gradient(239.44deg, #3c3e64 0.83%, #1d1e2a 100%);

  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 0 0 8px 8px; /*Verificar*/

  ${breakpoint('desktop')`
    background: #fff;
    height: 100%;
    
  `}
`;

export const FormMenu = styled.div`
  width: 100%;
  padding: 16px 24px;

  a {
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;

    ${breakpoint('desktop')`{
      border: none;
      display: none;
    `}
  }
`;

export const Profile = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 86px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    background: #ccc;
  }

  div {
    margin-left: 16px;
    color: #ffffff;

    strong {
      display: block;
      font-size: 24px;
      line-height: 28px;
    }

    span {
      display: block;
      margin-top: 8px;
      font-size: 14px;
      line-height: 16px;
    }

    ${breakpoint('desktop')`{
      font-size: 24px;
      line-height: 28px;
      color: #474971;
    `}
  }
`;

export const ValueInfo = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 160px;

  ${breakpoint('desktop')`
    margin-top: 32px;
    padding-bottom: 56px;
  `}

  input {
    border: none;
    border-bottom: 1px solid #474971;
    font-size: 4rem;
    color: #d8d8d8;
    text-align: center !important;
    max-width: 256px;
    background: transparent;

    &::placeholder {
      color: #d8d8d8;
    }
  }
`;

export const CardInfo = styled.div`
  width: 328px;
  padding: 24px 10px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #d8d8d8;

  ${breakpoint('desktop')`
    width: 90%;
    margin-bottom: 30px;
  `}

  svg {
    fill: #7de6c6;
    ${breakpoint('desktop')`
      fill: #474971;
    `}
  }

  div {
    margin-left: 10px;

    span {
      display: block;
      font-size: 14px;
      line-height: 16px;
      color: ${props => (props.selectedCard ? '#fff' : '#ef5778')};

      ${breakpoint('desktop')`
        color: ${props => (props.selectedCard ? '#474971' : '#ef5778')};
      `}
    }

    a {
      display: block;
      font-size: 14px;
      line-height: 16px;
      font-weight: bold;
      text-decoration: ${props => (props.selectedCard ? 'none' : 'underline')};
      color: ${props => (props.selectedCard ? '#fff' : '#ef5778')};

      ${breakpoint('desktop')`
        color: ${props => (props.selectedCard ? '#474971' : '#ef5778')};
      `}
    }
  }
`;

export const SubmitSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;

  button {
    background: linear-gradient(180deg, #b4f4e5 0%, #7de6c6 100%);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

    color: #474971;
    height: 48px;
    width: 90%;

    border: none;
    border-radius: 24px;

    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;

    ${css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
  }
`;
