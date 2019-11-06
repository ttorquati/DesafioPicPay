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

export const Loading = styled.div`
  background: linear-gradient(186.5deg, #3c3e64 0.83%, #1d1e2a 100%);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
`;

export const UserList = styled.ul`
  max-width: 1054px;
  margin: 0 auto;
`;

export const User = styled.li`
  background: linear-gradient(186.5deg, #3c3e64 0.83%, #1d1e2a 100%);
  box-shadow: 0px 1px 0px #ffffff, 0px -1px 0px #ffffff;

  display: flex;

  padding: 10px 16px;

  ${breakpoint('desktop')`
    padding: 16px 24px;
  `}
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  flex: 1;

  img {
    width: 52px;
    border-radius: 50%;
    border: 2px solid #ffffff;

    ${breakpoint('desktop')`
      width: 80px;
      border: 3px solid #ffffff;
      border-radius: 50%;
    `}
  }

  div {
    margin-left: 20px;
    flex: 1;

    strong {
      display: block;
      font-size: 16px;
      line-height: 19px;

      ${breakpoint('desktop')`
        font-size: 24px;
        line-height: 28px;
      `}
    }

    span {
      display: block;
      margin-top: 6px;
      font-size: 12px;
      line-height: 14px;
      ${breakpoint('desktop')`
        font-size: 14px;
        line-height: 16px;
      `}
    }
  }
`;
export const Payment = styled.div`
  display: flex;
  align-items: center;

  button {
    line-height: 0;
    font-size: 0;
    color: transparent;
    color: #fff;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;

    transition: color 0.2s;

    &:hover {
      color: #c0fff1;
    }

    ${breakpoint('desktop')`
      font-size: 20px;
      
    `}

    svg {
      display: inline-block;
      vertical-align: middle;

      &:first-child {
        margin-right: 10px;

        ${breakpoint('desktop')`
          margin-right: 14px;
        `}
      }

      &:last-child {
        ${breakpoint('desktop')`
          margin-left: 14px;
        `}
      }
    }
  }
`;
