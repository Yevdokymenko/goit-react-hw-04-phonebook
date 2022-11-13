import styled from 'styled-components';

export const List = styled.ul`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: orange;
  :hover {
    background-color: black;
    color: orange;
  }
  border-radius: 4px;
  border: 1px solid #d6dbdf;
  padding: 4px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  justify-content: space-between;
`;
