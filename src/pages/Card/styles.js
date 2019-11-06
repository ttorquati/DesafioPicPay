import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

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

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex: 1;
  padding: 56px 20px 136px;

  ${breakpoint('desktop')`
    padding: 20px 40px 50px;
  `}

  select {
    width: 100%;
    border: none;
    border-bottom: 2px solid #acb1bd;
    color: #acb1bd;
    background: transparent;
    font-size: 16px;
    line-height: 22px;
    padding: 4px 0;

    &:focus {
      border-bottom: 2px solid #7de6c6;

      ${breakpoint('desktop')`
        border-bottom: 2px solid #474971;
      `}
    }
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 2px solid #acb1bd;
    color: #fff;
    background: transparent;
    font-size: 16px;
    line-height: 22px;
    padding: 4px 0;

    ${breakpoint('desktop')`
        color:  #474971;
        margin-top: 30px;
    `}

    &::placeholder {
      color: #acb1bd;
    }

    &:hover {
      cursor: text;
    }

    &:focus {
      border-bottom: 2px solid #7de6c6;

      ${breakpoint('desktop')`
        border-bottom: 2px solid #474971;
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
  }
`;
