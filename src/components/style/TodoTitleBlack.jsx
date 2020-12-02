import styled from 'styled-components';

export const TodoTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 47px;
  min-height: 47px;
  padding: 0px 19px;
  color: white;
  background: black;
  border: 3px solid black;
  border-radius: 15px;

  & h1 {
    font-size: 16px;
  }

  & div {
    display: inline-block;
  }

  & div svg:first-child {
    margin-right: 8px;
  }

  & div svg:last-child {
    cursor: pointer;
  }
`;
