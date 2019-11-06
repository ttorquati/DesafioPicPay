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

  strong {
    margin-top: 20px;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    font-family: Roboto;
    font-weight: 500;

    ${breakpoint('desktop')`
      color: #474971;      
    `}
  }
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

export const CardList = styled.ul`
  width: 100%;
  flex: 1;
  padding: 20px 0;

  ${breakpoint('desktop')`
    padding: 46px 0;      
  `}
`;

export const Card = styled.li`
  align-items: center;
  justify-content: center;

  button {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 20px;
    background: ${props =>
      props.selected ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;

    transition: background 0.3s;

    ${breakpoint('desktop')`
      color: #474971;  
      background: ${props =>
        props.selected ? 'rgba(125, 230, 198, 0.24)' : 'transparent'};    
    `}

    &:hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.1);

      ${breakpoint('desktop')`
        background: rgba(125, 230, 198, 0.24);
      `}
    }

    svg {
      &:first-child {
        margin-right: 16px;
        fill: #7de6c6;

        ${breakpoint('desktop')`
          fill: #474971;
        `}
      }
      &:last-child {
        margin-left: 16px;
        visibility: ${props => (props.selected ? 'visible' : 'hidden')};
      }
    }
  }
`;

export const AddCard = styled.div`
  width: 328px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #d8d8d8;
  padding: 30px 0;

  ${breakpoint('desktop')`
    width: 90%;    
  `}

  svg {
    margin-right: 10px;
    ${breakpoint('desktop')`
      fill: #474971;
    `}
  }

  a {
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    ${breakpoint('desktop')`
      color: #474971;
    `}
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
