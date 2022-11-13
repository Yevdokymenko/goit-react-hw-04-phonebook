import styled from 'styled-components';

export const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  font-size: 14px;
  padding: 8px;
  border: 2px solid black;
  outline: transparent;
  border-radius: 4px;
  margin-top: 4px;
  :focus {
    border: 2px solid #33beff;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  font-size: 16px;
  width: 130px;
  padding: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 28px;
  background-color: orange;
  border: 1px solid black;
  border-radius: 4px;
  :hover {
    background-color: black;
    color: orange;
  }
`;
