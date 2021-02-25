import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  width: 100vw;
  height: 100vh;
  a,
  h2 {
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  width: 35vh;
  input {
    width: 35vh;
  }
  button {
    margin-top: 10px;
    width: 100%;
  }
`;
