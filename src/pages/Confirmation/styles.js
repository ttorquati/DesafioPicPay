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
  flex-direction: column;
  justify-content: center;
  padding-bottom: 130px;

  ${breakpoint('desktop')`
    margin-top: 32px;
    padding-bottom: 56px;
  `}

  strong {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #ffffff;

    ${breakpoint('desktop')`
      color: #474971;
    `}
  }

  ul {
    margin-top: 20px;

    ${breakpoint('desktop')`
      width: 280px;
      margin-bottom: 20px;
    `}

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #fff;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      padding-bottom: 2px;
      margin-top: 20px;
      color: #eee;

      ${breakpoint('desktop')`
        font-weight: 500;
        color: #474971;
        border-bottom: 1px solid #474971;
      `}

      span {
        color: #7de6c6;

        ${breakpoint('desktop')`
          color: #474971;
        `}
      }
    }
  }
`;

export const SubmitSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px 20px;

  ${breakpoint('desktop')`
    justify-content: center;
  `}

  button {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;

    height: 48px;

    border: none;
    border-radius: 24px;

    &:first-child {
      background: transparent;
      color: #fff;
      border: 2px solid #fff;
      width: 100px;

      ${breakpoint('desktop')`
        color: #474971;
        border: 2px solid #474971;
        width: 180px;
        margin-right: 20px;
      `}
    }

    &:last-child {
      background: linear-gradient(180deg, #b4f4e5 0%, #7de6c6 100%);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
      color: #474971;
      width: 180px;
      ${breakpoint('desktop')`
        margin-left: 20px;
      `}
    }
  }
`;
