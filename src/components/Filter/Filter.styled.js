import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  font-size: 14px;
  width: 200px;
  margin-top: 4px;
  border: 2px solid black;
  outline: transparent;
  border-radius: 4px;
  :focus {
    border: 2px solid orange;
  }
  padding: 8px;
`;
